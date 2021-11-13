---
category: AWS CLI
date: '2020-11-17'
slug: /how-to-fix-aws-command-line-tools-when-homebrew-breaks-python
tags:
- Miscellaneous
- Python
title: How to Fix AWS CLI Tools When Homebrew Breaks Python
type: post
---


I installed [stunnel](https://www.stunnel.org) on my mac via homebrew. I wasn't expecting the Spanish Inquisition. Homebrew did a giant update including some craziness with Python. I'm not sure what happened, but it broke all my virtual environments. I thought those were supposed to be independent, but that's another story. They were easy enough to fix. I just blew them away and recreated them. 

The other thing that went sideways was the [AWS CLI](https://aws.amazon.com/cli/). When I tried to run a command, I'd get this:

```txt
$ aws s3 sync some/file.txt s3://bucket/some/file.txt
... A bunch of scary error code...
from hashlib import md5, sha1, sha256
ImportError: cannot import name md5*
```
    

Per [this page](https://medium.com/dev-genius/how-to-fix-md5-importerror-with-python-2-and-pip-cfe389dc24eb), I uninstalled the remains of homebrew's pytyon 2 via:

```txt
brew uninstall python@2
```

After that, I tried another aws command:
    
```txt
$ aws s3 sync some/file.txt s3://bucket/some/file.txt
zsh: /usr/local/bin/aws: bad interpreter: /usr/local/opt/python@2/bin/python2.7: no such file or directory
```
    

In fact, running just `aws` by itself produces the same error

Figured it was time to start over. My next step was to reinstall aws-cli.  The [Amazon page](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html) for the aws-cli tool says to do updates the same way you did the initial install. I don't remember how I did that so I removed the existing install first. The note says to find your `aws` command with `which`:

```txt
$ which aws
/usr/local/bin/aws    
```

The notes say to uninstall `aws` and `aws_completer`, but there are other files there as well: `aws_bash_completer`, `aws_zsh_completer.sh` and `aws.cmd`. I deleted them with:
    
```txt
sudo rm /usr/local/bin/aws
sudo rm /usr/local/bin/aws.cmd
sudo rm /usr/local/bin/aws_bash_completer
sudo rm /usr/local/bin/aws_completer
sudo rm /usr/local/bin/aws_zsh_completer.sh
```
    
I ran `which` again and there was another `aws` command floating around:

```txt
$ which aws
/Users/alans/Library/Python/3.7/bin/aws
```
    

I tried using it, but got a similar error:

```txt
$ aws
zsh: /Users/alans/Library/Python/3.7/bin/aws: bad interpreter: /usr/local/opt/python/bin/python3.7: no such file or directory 
```
    

The same set of files was showed up in the new directory:

```txt
$ ll /Users/alans/Library/Python/3.7/bin/ |grep  aws
-rwxr-xr-x  1 alans  staff   834B Jun 11  2019 aws
-rwxr-xr-x  1 alans  staff   1.4K Jun 11  2019 aws.cmd
-rwxr-xr-x  1 alans  staff   204B Jun 11  2019 aws_bash_completer
-rwxr-xr-x  1 alans  staff   1.1K Jun 11  2019 aws_completer
-rwxr-xr-x  1 alans  staff   1.8K Jun 11  2019 aws_zsh_completer.sh
```

I deleted them as well and finally cleared the system of the `aws` command. 

```txt
$ which aws
aws not found
```
    
The Amazon page also talks about deleting:

```txt
/usr/local/aws-cli
```

But I didn't have that. So, I just moved on. 

I installed aws-cli via the the mac gui and that got things working again. 

```txt
aws --version
aws-cli/2.1.1 Python/3.7.4 Darwin/18.7.0 exe/x86_64
```

Just installing over top might have worked, but the directions said to install the same way you did the first time. That's a poor UX, but it is what it is. Since I don't remember how I installed originally, I just nuked the site from orbit and started over. It's was the only way to be sure.