---
category: Live Coding
date: '2020-10-04'
slug: /stream-notes-2020-10-04
tags: []
title: Building (and Finishing) a Safari URL and Title Puller - Part 3
type: post
---


`youtube: https://www.youtube.com/watch?v=PRAT4RzP2Tg`


### [START - 00:00:00] Finishing Up The Safari Tab URL Puller

Continuing work from the prior streams where I'm building a little tool to pull out the Titles and URLs from all my open browser tabs. In this session, I finish the script. I it up to eliminate search result pages and duplicates and removed some superfluous leading numbers and words from the links. 

The super handy tool I used to help with the regular expressions was [pythex](https://pythex.org). It lets you drop in a test string and then bang a RegEx against if it does what you expect. (And lets you refine it until it does.)

Here's an example of the RegEx I used to eliminate the numbers the precede titles in lots of documentation:

```python{numberLines: true}
#!/usr/bin/evn python3

import re

initial_string = "8.7. sets — collections 2.7.18 documentation"

no_front_nums = re.sub("^(\d\.)+\s+", "", initial_string)

print(no_front_nums)
```


Which outputs:

```python
sets — collections 2.7.18 documentation
```


I ended up using Python's `sets` to dedupe the links. The way sets work is that if you add the same thing to a single set multiple times, it only shows up once on the output. For example:

```python{numberLines: true}
#!/usr/bin/env python3

my_set = set()

my_set.add("Fry")
my_set.add("Zoidberg")    
my_set.add("Farnsworth")
my_set.add("Fry")    
my_set.add("Fry")
my_set.add("Fry")
my_set.add("Bender")
my_set.add("Fry")

print(my_set)
```

Which outputs: 

```python
{'Fry', 'Farnsworth', 'Bender', 'Zoidberg'}
```


I did all the processing work with TDD using [unittest](https://docs.python.org/3/library/unittest.html). I'm super glad I did. When I first started out, I thought I was just going to drop in the titles as is. But, as I looked at the output, I wanted more. Having the backing of TDD made sure that I didn't mess up one transformation while working on another. The other thing that really helped with that was using Sandi Metz's teachings of Shameless Green and Staying One Undo Away From Green. The more I get back into it, the more it feels like I've learned secret magic. (You can see it in the stream, but I'll also write up more about that soon. [This piece about it ain't bad](https://blog.red-badger.com/2014/08/20/i-spent-3-days-with-sandi-metz-heres-what-i-learned))

With all that, the first version of the pull is done!

I've come up with a few other ideas (like automatically turning StackOverflow links into the short share version with my ID attached for the rep), but those are for another day. 

(Ironically, I don't have links for this one other than the ones above. Oh, well...)

The code for the puller comes in two parts: First is a slightly modified version of the AppleScript I got from [David Rostenne's theconsultant.net](https://theconsultant.net/2017/06/capture-all-tabs-in-safari-as-urls-to-the-clipboard/). All credit goes to him. 

The second part is the Python code that gathers the AppleScript output, does the modifications, and outputs the final results. 

Here's the AppleScript:

```applescript{numberLines: true}
tell application “Safari”
	set docText to “”
	set windowCount to count (every window where visible is true)
	repeat with x from 1 to windowCount
		set tabCount to number of tabs in window x
		repeat with y from 1 to tabCount
			set tabName to name of tab y of window x
			set tabURL to URL of tab y of window x as string
			set docText to docText & tabName & ” – ” & tabURL & linefeed as string
		end repeat
		set the clipboard to the docText
	end repeat
end tell
```

And the python:

```python{numberLines: true}
#!/usr/bin/env python3

import re
import subprocess

def make_md_line_v2(title, url):
    md_line = "- [{}]({})".format(title, url)
    return md_line

def do_it():
    output_lines = set()
    osa_response = subprocess.run(['osascript', 'tab-parser.scpt'], stdout=subprocess.PIPE).stdout.decode('utf-8')
    osa_lines = osa_response.split("\n")

    for osa_line in osa_lines:

        if re.search("http://127.0.0.1", osa_line):
            continue
        if re.search("http://launchpad", osa_line):
            continue
        if re.search("http://localhost", osa_line):
            continue
        if re.search("https://www.alanwsmith.com", osa_line):
            continue
        if re.search("https://www.google.com/search", osa_line):
            continue

        if re.search("~~~", osa_line):
            title, url = osa_line.split("~~~")
            title = process_title(title)
            md_string = make_md_line_v2(title=title, url=url)
            output_lines.add(md_string)

    with open('link-details.md', 'w') as output_file:
        for output_line in sorted(output_lines, key=str.lower):
            output_file.write("{}\n".format(output_line))

def process_title(title):
    title = re.sub("^[\d\.]+\s+", "", title)
    tokens = title.split(" - ")
    if len(tokens) is 3:
        if tokens[2] == "Stack Overflow":
            return_value = "{} - {}".format(tokens[1], tokens[2])
            return return_value
    return title

if __name__ == "__main__":
    do_it()
```

While it took some time to build, it's already paying me back. Partially in time, but way more in saving me from tedium.