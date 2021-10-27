---
blurb: Not only a warning, but what to do about it.
category: Ruby
date: '2014-05-10'
slug: /nice-design-touch-in-rvm
tags:
- Design
title: Nice Design Touch in RVM for Auto-Update
type: post
---


<img src="/image-graphics/rvm-logo-200x200.png" style="float: right; padding-left:26px;" />

The [Ruby Version Manager][rvm] (or, RVM) is an incredibly useful tool for working with Ruby. It provides a way to install and switch between multiple versions of the language with ease. It also provides an excellent example of how to be a useful piece of software. 

When installing a new version of Ruby, RVM checks itself to see if it's up to date. If not, it shows a warning:

    Warning, new version of rvm available '1.25.25', 
    you are using older version '1.25.14'.

Pretty standard stuff there. The nice design touch comes on the next lines. Not only does RVM describe two solutions, it also provides the actual commands that implement them. 

    You can disable this warning with:
        echo rvm_autoupdate_flag=0 >> ~/.rvmrc
    
    You can enable  auto-update  with:  
        echo rvm_autoupdate_flag=2 >> ~/.rvmrc

Just copy and paste the `echo rvm_autoupdate_flag=2 >> ~/.rvmrc` string into the command line and RVM will update itself whenever it needs. Very nicely done, RVM.


[rvm]: https://rvm.io