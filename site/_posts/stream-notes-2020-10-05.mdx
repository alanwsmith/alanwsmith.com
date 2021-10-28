---
category: Hugo
date: '2020-10-05'
slug: /stream-notes-2020-10-05
tags:
- Live Coding
- Django
title: Adding Styles to Hugo's YouTube Shortcode, Getting Frustrated with Django's
  Tutorial, and Building a Screenshot Renamer
type: post
---


`youtube: https://www.youtube.com/watch?v=3jqDicoxB00`


### [Start 00:00:00] - Add CSS Styles to Hugo's Youtube Shortcodes

Hugo comes with a shortcode for embedding responsive youtube videos. The basic version looks like this:

```python
{{</* youtube dQw4w9WgXcQ */>}}
``` 

The output from the shortcode is [embedded in hugo](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/shortcodes/youtube.html). It contains inline styles to make the video responsive, but there's no CSS class for further styling. With my theme, this results in zero space below the video before the next element. 

It's not listed in the [docs](https://gohugo.io/content-management/shortcodes/#youtube), but you can assign a class by explicitly identifying the id and then calling the class:

```python
{{</* youtube id="dQw4w9WgXcQ" class="youtube_player" */>}}
``` 

That's great and all, but I don't want to have to add a class that's going to be the same every time.

You can't edit the youtube shortcode directly. It's embedded in Hugo. However, you can override it by putting a new file at either:

> site_root/layouts/shortcodes/youtube.html

or:

> site_root/themes/YOUR_THEME/layouts/shortcodes/youtube.html


So, that's what I did. Here's the code I used for my custom `youtube.html` file:

```python{numberLines: true}
{{- $pc := .Page.Site.Config.Privacy.YouTube -}}
{{- if not $pc.Disable -}}
{{- $ytHost := cond $pc.PrivacyEnhanced  "www.youtube-nocookie.com" "www.youtube.com" -}}
{{- $id := .Get "id" | default (.Get 0) -}}
{{- $class := .Get "class" | default (.Get 1) }}
<div class="youtube_video">
  	<iframe 
  		src="https://{{ $ytHost }}/embed/{{ $id }}{{ with .Get "autoplay" }}{{ if eq . "true" }}?autoplay=1&mute=1{{ end }}{{ end }}" 
  		allowfullscreen title="YouTube Video"></iframe>
</div>
{{ end -}}
```

[_Update October 13, 2020:_ Added `&mute=1` to `autoplay` which is now required to get autoplay to work]



Then I simply moved the inline styles from the original shortcode source into one of my theme's scss files. 

```css{numberLines: true}
.youtube_video {
	position: relative; 
	padding-bottom: 56.25%; 
	height: 0; 
	overflow: hidden;
	margin-bottom: 50px;
}

.youtube_video iframe {
	position: absolute; 
	top: 0; 
	left: 0; 
	width: 100%; 
	height: 100%; 
	border:0;
}
```

Quick and easy and now my videos don't mush against each other.



### [Time: 00:29:15] - Making Progress With Django


Trying to dig back into the [official Django tutorial](https://docs.djangoproject.com/en/3.1/intro/tutorial01/). Still just as frustrating as before. It just does not work with the way I learn. They thrown way to much code at you at one time without seeing changes and sometimes have to add and remove code without seeing what the first version does. I made a touch of progress, but frustrated to the point that I bailed again. 

There are other tutorials out there, but I've decided to write my own. I've got enough of a grounding that I can kick around the official one to figure out what I need but make it work the way that works for me (and anyone else that thinks like me).

Stay tuned for that. 


### [Time: 01:02:09] - Migrate Screenshots to Naming Conventions

I love that Macs have a built in screenshot tool, but I don't like the naming convention they use for the files. An example is:

> Screen Shot 2020-10-05 at 1.57.05 PM.png

It wouldn't be so bad if they used a 24 hour clock instead of AM/PM. But, even with that, I'd still want it to match the convention I use for my photos and videos. Using the same files as an example, and converting it to my personal directory/file convention gets you:

> screenshots/2020/10-Oct/aws-20201006--1357-01a.png


Which is based mainly off [strftime()](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes):

> screenshots/{%Y}/{%m}-{%b}/aws-{%Y}{%m}{%d}--{%H}{%M}-{CF}a.png

Where:

- %Y - Year with century as a decimal number
- %m - Month as a zero-padded decimal number
- %b - Month as locale’s abbreviated name
- %d - Day of the month as a zero-padded decimal number.
- %H - Hour (24-hour clock) as a zero-padded decimal number.
- %M - Minute as a zero-padded decimal number.
- CF - A conflict number that starts at 1 and goes up for each image if more than one occur with the same preceding filename (i.e. occurred in the same minute.)


I spent a lot of time making my own time parser to get the data out of the source filenames before I realized I could just use the built python datetime parser. Things went quick after that. This is another case where things would have gone way faster if I had just thought about the end solution first. But, it took going through the other processes to get to the last one. None of that was wasted time, it's just the nature of getting more information to refine the process. In this case, refining meant using an entirely different tool. Other than the initial facepalm, I don't let that get to me. 


### Links From The Stream


- [12-hour clock - Simple English Wikipedia, the free encyclopedia](https://simple.wikipedia.org/wiki/12-hour_clock)
- [12-hour clock - Wikipedia](https://en.wikipedia.org/wiki/12-hour_clock)
- [Built-in Types — Python 2.7.18 documentation](https://docs.python.org/2/library/stdtypes.html#string-formatting-operations)
- [Data Structures — Python 3.8.6 documentation](https://docs.python.org/3/tutorial/datastructures.html)
- [datetime — Basic date and time types — Python 3.8.6 documentation](https://docs.python.org/3/library/datetime.html)
- [datetime strftime and strptime — Basic date and time types — Python 3.8.6 documentation](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes)
- [Get folder name of the file in Python - Stack Overflow](https://stackoverflow.com/questions/33372054/get-folder-name-of-the-file-in-python)
- [How do I check whether a file exists without exceptions? - Stack Overflow](https://stackoverflow.com/questions/82831/how-do-i-check-whether-a-file-exists-without-exceptions)
- [How do I mock the filesystem in Python unit tests? - Stack Overflow](https://stackoverflow.com/questions/19672138/how-do-i-mock-the-filesystem-in-python-unit-tests)
- [How to find if directory exists in Python - Stack Overflow](https://stackoverflow.com/questions/8933237/how-to-find-if-directory-exists-in-python)
- [How to Format Dates in Python](https://stackabuse.com/how-to-format-dates-in-python/)
- [How to pad a string with leading zeros in Python 3 - Stack Overflow](https://stackoverflow.com/questions/39402795/how-to-pad-a-string-with-leading-zeros-in-python-3/39402910)
- [How to rename a file using Python - Stack Overflow](https://stackoverflow.com/questions/2491222/how-to-rename-a-file-using-python)
- [How to replace file-access references for a module under test - Stack Overflow](https://stackoverflow.com/questions/16468443/how-to-replace-file-access-references-for-a-module-under-test)
- [Monitor Folder Contents with launchd - Including Subfolders? - Ask Different](https://apple.stackexchange.com/questions/351799/monitor-folder-contents-with-launchd-including-subfolders)
- [mkdir -p functionality in Python - Stack Overflow](https://stackoverflow.com/questions/600268/mkdir-p-functionality-in-python)
- [os — Miscellaneous operating system interfaces — Python 3.8.6 documentation](https://docs.python.org/3/library/os.html)
- [pipenv · PyPI](https://pypi.org/project/pipenv/)
- [pyfakefs · PyPI](https://pypi.org/project/pyfakefs/)
- [Python range() Function Explained with Examples](https://pynative.com/python-range-function/)
- [Python strftime reference](https://strftime.org/)
- [Setup OS X Folder Actions to Know When a File is Added](https://www.lifewire.com/use-os-x-folder-actions-to-know-2260158)
- [Shortcodes | Hugo](https://gohugo.io/content-management/shortcodes/#example-youtube-input)
- [sprintf like functionality in Python - Stack Overflow](https://stackoverflow.com/questions/5309978/sprintf-like-functionality-in-python)
- [strftime(3) - Linux manual page](https://man7.org/linux/man-pages/man3/strftime.3.html)
- [The break statement](https://docs.python.org/2.0/ref/break.html)
- [time — Time access and conversions — Python 3.8.6 documentation](https://docs.python.org/3/library/time.html)
- [YouTube Shortcode master file on github](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/shortcodes/youtube.html)
- [What is ISO 8601](http://web.mit.edu/jmorzins/www/iso8601/y2kiso.htm)