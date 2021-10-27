---
category: Snippets
date: '2020-10-08'
draft: true
slug: /snippet-python-get-web-page
tags:
- Python
title: Snippet Get Web Page in Python
type: post
---


Here's the simple snippet I use to scrape basic web pages in Python.

```python{numberLines: true}
def get_web_page(url):
    try:
        with urllib.request.urlopen(url) as response:
            return response.read().decode("utf-8")
    except:
        return ""
```

Most of the examples I see only have the middle part:

```python{numberLines: true}
with urllib.request.urlopen(url) as response:
	return response.read().decode("utf-8")
```

The problem is that code crashes if the server sends an error code back. Wrapping it with the try lets you handle that. 

Here's a full sample:

```python{numberLines: true}
#!/usr/bin/env python3

import urllib.request

def get_web_page(url):
    try:
        with urllib.request.urlopen(url) as response:
            return response.read().decode("utf-8")
    except:
        return ""

if __name__ == "__main__":
    html_doc = get_web_page("https://www.alanwsmith.com/")
    print(html_doc)
```