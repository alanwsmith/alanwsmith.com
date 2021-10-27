---
blurb: Probably one of my top 10 most used aliases.
category: Today I Learned
date: '2015-06-12'
slug: /til-quickly-copy-a-directory-path
tags: []
title: 'Today I Learned: Quickly Copy a Directory Path'
type: post
---


I add this to my `.zshrc`, `.bashrc`, etc... files to quickly copy directory paths from the command line:

```bash{numberLines: true}
alias pwc="pwd | tr -d '\n' | pbcopy"
```

It runs `pwd`, clips the newline off then sends it to the pasteboard (aka clipboard). 

Super handy. 

---


_Side note: "pwd" stands for "print working directory". Using "cwd" would make more sense grammatically (i.e. "copy working directory") but the keystrokes are cumbersome. Hence, I use "pwc". Your mileage may vary. Season to taste._