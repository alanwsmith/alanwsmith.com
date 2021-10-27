---
category: Live Coding
date: '2020-10-13'
slug: /stream-notes-2020-10-13
tags:
- Python
title: URL Grabber Is Mostly Working
type: post
---


`youtube: https://www.youtube.com/watch?v=eCPD_9_PDek`

### [Start: 00:00:00] - Refactoring My Daily URL Grabber

I spent this stream making progress on my URL Grabber. Most of the time was spent refactoring. I switched to sending values into instance methods instead of pulling data from instance variables. It makes the tests look nicer. But, I don't like the overhead it adds when using the class (e.g. I'd rather call `ua.method()` and `ua.method(ua.variable)`).

I've done very little OOP. I'm not sure what the best practice is. I'm guessing it's to use instance variables directly, since, you know, they're there. I'll do some more looking at that. (I wouldn't be surprised to find a religious war between the two approaches.) In the mean time, I'm going to go back to using the instance variable as local variables inside the methods instead of passing them in. It won't make the test code that much uglier and it'll clean up the main running of the script. 

The new code I put in place is to store the data storage JSONs and final output .md files in date specific locations. There's some hard coding, but the script is working. 

Next steps:

- Alphabetize output
- Setup RegEx patterns to filter out localhost domains, work domains, etc...
- Move hard coded variables into a config file
- Make any directories that don't exist when saving outputs (i.e. `mkdir -p`)
- Setup a blog post template to put the links in
- Build the launchd script that triggers the process every ten minutes

And, that should do it for the first version. 

Here's the script in it's current state:

```python
archive_urls.py
```

```python{numberLines: true}
#!/usr/bin/env python3

import json
import subprocess

from datetime import date

class URLArchiver():

    def __init__(self):
        self.object_data = {}
        self.osascript_string = ""
        self.md_string = ""
        self.md_file_path = ""
        self.json_path = ""

    def build_md_link(self, *, url, title):
        md_link = "- [{}]({})".format(title, url)
        return md_link

    def get_osascript_string(self):
        self.osascript_string = subprocess.run(
            ['osascript', 'tab-parser.scpt'],
            stdout=subprocess.PIPE).stdout.decode('utf-8')

    def load_json_from_path(self, *, json_path):
        try:
            with open(json_path, 'r') as json_file:
                self.object_data = json.load(json_file)
        except:
            self.object_data = {}

    def make_md_from_object_data_v2(self, *, object_data):
        for item in object_data:
            self.md_string += "{}\n".format(
                self.build_md_link(url=item, title=object_data[item])
            )

    def save_json(self):
        with open(self.json_path, 'w', encoding='utf-8') as output_json:
            json.dump(self.object_data, output_json, ensure_ascii=False, indent=4)

    def set_md_file_path(self, *, root_dir, date):
        self.md_file_path = "{}/{}/{}-{}-{}-links.md".format(
            root_dir,
            date.year,
            date.year,
            date.strftime("%m"),
            date.strftime("%d")
        )

    def set_json_path(self, *, root_dir, date):
        self.json_path = "{}/{}/{}-{}/{}-{}-{}-urls.json".format(
            root_dir,
            date.year, date.strftime("%m"), date.strftime("%b"),
            date.year, date.strftime("%m"), date.strftime("%d"),
        )

    def set_object_data_from_osascript_string(self, *, osascript_string):
        for line in osascript_string.split("\n"):
            parts = line.split("~~~")
            if len(parts) == 2:
                self.object_data[parts[1]] = parts[0]

    def write_md_file(self):
        with open(self.md_file_path, "w") as output_md_file:
            output_md_file.write(ua.md_string)

if __name__ == '__main__':

    ua = URLArchiver()

    ua.set_json_path(
        root_dir="/Users/alans/data/url_archiver/jsons",
        date=date.today()
    )

    ua.set_md_file_path(
        root_dir="/Users/alans/data/url_archiver/md-files",
        date=date.today()
    )

    ua.load_json_from_path(
        json_path=ua.json_path
    )

    ua.get_osascript_string()

    ua.set_object_data_from_osascript_string(
        osascript_string=ua.osascript_string
    )

    ua.make_md_from_object_data_v2(
        object_data=ua.object_data
    )

    ua.write_md_file()
    ua.save_json()
```

And, here's the tests:

```python
test_archive_urls.py
```

```python{numberLines: true}
#!/usr/bin/env python3

import archive_urls
import unittest

from datetime import date

class URLArchiverTests(unittest.TestCase):

    def setUp(self):
        global ua
        ua = archive_urls.URLArchiver()

    def test_integration_md_v2(self):
        expected="""- [link1](https://www.example.com/)
- [link2](https://www.alanwsmith.com/)
"""
        ua.make_md_from_object_data_v2(
            object_data={
                "https://www.example.com/": "link1",
                "https://www.alanwsmith.com/": "link2",
            }
        )
        actual = ua.md_string
        self.assertEqual(expected, actual)

    def test_build_md_link(self):
        url = "https://www.example.com/"
        title = "link1"
        expected="- [link1](https://www.example.com/)"
        actual = ua.build_md_link(url=url, title=title)
        self.assertEqual(expected, actual)


    def test_set_object_data_from_osascript_string(self):
        ### Prep
        osascript_string='''Title1~~~https://www.example.com/
Title2~~~https://www.alanwsmith.com/'''

        ### Expected
        expected = {
            'https://www.alanwsmith.com/': 'Title2',
            'https://www.example.com/': 'Title1',
        }

        ### Results
        ua.set_object_data_from_osascript_string(
            osascript_string=osascript_string
        )
        actual = ua.object_data
        self.assertEqual(expected, actual)


    def test_json_path(self):
        expected="/quick/brown/fox/2010/01-Jan/2010-01-09-urls.json"

        ua.set_json_path(
            root_dir="/quick/brown/fox",
            date=date(2010,1,9)
        )
        actual = ua.json_path
        self.assertEqual(expected, actual)


    def test_md_file_path(self):
        expected="/quick/brown/fox/2030/2030-01-02-links.md"
        ua.set_md_file_path(
            root_dir="/quick/brown/fox",
            date=date(2030,1,2)
        )
        actual = ua.md_file_path
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()
```





### Links From The Stream

- [datetime — Basic date and time types — Python 3.9.0 documentation](https://docs.python.org/3/library/datetime.html#datetime.date.year)
- [Example Domain](https://www.example.com/)
- [Exercism](https://exercism.io/)
- [Getting today's date in YYYY-MM-DD in Python? - Stack Overflow](https://stackoverflow.com/questions/32490629/getting-todays-date-in-yyyy-mm-dd-in-python)
- [How do I mock the filesystem in Python unit tests? - Stack Overflow](https://stackoverflow.com/questions/19672138/how-do-i-mock-the-filesystem-in-python-unit-tests)
- [How to get current date and time in Python?](https://www.programiz.com/python-programming/datetime/current-datetime)
- [How to replace file-access references for a module under test - Stack Overflow](https://stackoverflow.com/questions/16468443/how-to-replace-file-access-references-for-a-module-under-test)
- [jmcgeheeiv/pyfakefs: pyfakefs implements a fake file system that mocks the Python file system modules.](https://github.com/jmcgeheeiv/pyfakefs)
- [jmcgeheeiv/pyfakefs: pyfakefs implements a fake file system that mocks the Python file system modules.](https://github.com/jmcgeheeiv/pyfakefs/)
- [Nature](https://www.nature.com/)
- [pyfakefs · PyPI](https://pypi.org/project/pyfakefs/)
- [Reverse a string in Python - Stack Overflow](https://stackoverflow.com/questions/931092/reverse-a-string-in-python)
- [Video List - Google Sheets](https://docs.google.com/spreadsheets/d/1B-3mHilKzhGKW6r6Nb1cH7Nr2ekxV2STIgenpo2KkCQ/edit#gid=0)
- [Yea Alabama! - YouTube](https://www.youtube.com/watch?v=rTGEpDSfmJ4&t=22)