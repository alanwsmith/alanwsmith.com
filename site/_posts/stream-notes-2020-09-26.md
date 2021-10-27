---
category: Live Coding
date: '2020-09-26'
draft: true
slug: /stream-notes-2020-09-26
tags: []
title: 'Live Coding: Working On My Hugo Website'
type: post
---


`youtube: https://www.youtube.com/watch?v=T25kxdY7Qwo`

### Overview

I use a modified version of the [Tale](https://themes.gohugo.io/tale-hugo/) theme by [Emiel Hollander](https://www.emielhollander.nl) for my [Hugo](https://gohugo.io) website. In this stream, I make some modifications to it to hightlight draft headlines so they are easier to see. I also make some adjustments to the pagination of the site and then figure out how to change the syntax highlighting. 

The code I used to highlight the drafts in my posts is:

```python{numberLines: true}
{{ if eq .Draft true }}DRAFT: {{ end }}
```	

Highlighting is done pretty much straight from the example code with:

```go{numberLines: true}
{{</* highlight python "linenos=table" */>}}
/* code goes here */
{{</* / highlight */>}}
```


To use my own highlights, I ran this command inside my 






### Useful Links

- [Hugo Conditionals](https://www.mikedane.com/static-site-generators/hugo/conditionals/)
- [Hugo Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/)

	






https://help.farbox.com/pygments.html - colorful


note that code highligthing should be done with the pygments thing in the config file at the root of the hugo site. 


https://gohugo.io/getting-started/configuration-markup/


https://github.com/yuin/goldmark/#built-in-extensions

TODO: Look at this: https://raw.githubusercontent.com/it-gro/hugo-theme-w3css-basic/master/exampleSite/config.toml

TODO: Look at: https://invent.kde.org/websites/kate-editor-org/tree/master/themes/beautifulhugo