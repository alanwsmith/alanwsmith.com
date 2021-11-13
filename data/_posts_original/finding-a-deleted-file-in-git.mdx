---
category: Git
date: '2020-12-22'
slug: /finding-a-deleted-file-in-git
tags: []
title: Finding And Restoring A Deleted File In Git
type: post
---


---


### TL;DR

If you delete a file and need to restore it but don't know the path you can search for it with the argument to the last `grep` in this command:

```bash
git log --diff-filter=D --summary --reverse | grep delete | grep scss
```


Once you find the filepath you're after, look for the commits that affected it with:

```bash
git log --summary --reverse -- <FILE_PATH>
```

Find the commit where you deleted the file and pull it back by using `~1` after the commit ID. 

```bash
git checkout <COMMIT_ID>~1 -- <FILE_PATH>
```

At that point, it'll be staged in your existing branch and ready to commit. 

---



I did a Digital Garden redesign of my site a few weeks ago. I switched over to [Tailwind](https://tailwindcss.com) for CSS during the process. When I made the jump, I remove my old CSS files. Today, I realized that my custom code syntax highlighting was part of the purge. Here's how I got it back. 

My site is stored in a git repository. I wasn't sure what the file was named, but I new it was a SCSS file and had that extension. So, I ran this command to get the file name:

```bash
git log --diff-filter=D --summary --reverse | grep delete | grep scss
```

Where:

- `git log` outputs the logs of the repo
- `--diff-filter=D` limits the logs to just the deletes
- `--summary` changes the output format so that includes the actions on the specific files that were modified.

    For example, `git log` without `--summary` produces this:

```bash
commit 64965cde047d066b8b1962905652c26c4b454813
Author: Alan W. Smith <user@example.com>
Date:   Mon Dec 21 20:57:15 2020 -0500

    Deployment Auto Commit    

With `--summary` that turns into:

commit 64965cde047d066b8b1962905652c26c4b454813
Author: Alan W. Smith <user@example.com>
Date:   Mon Dec 21 20:57:15 2020 -0500

    Deployment Auto Commit

 delete mode 100644 prod/themes/tale-aws/assets/css/tale/webmentions.scss    
```

- `--reverse` flips the order of the output so that the most recently deleted files are at the end of the run (which makes them easier to find).
- `grep delete` pull out just the lines with the file paths in them. So, instead of:

```bash
commit 64965cde047d066b8b1962905652c26c4b454813
Author: Alan W. Smith <user@example.com>
Date:   Mon Dec 21 20:57:15 2020 -0500

    Deployment Auto Commit

    delete mode 100644 prod/themes/tale-aws/assets/css/tale/webmentions.scss 
```

    We get simply:

```bash
delete mode 100644 prod/themes/tale-aws/assets/css/tale/webmentions.scss
```

- And finally, `grep scss` is what I used to find the SCSS files. 

Scrolling back through the output, I found the file I was after:

```bash
delete mode 100644 prod/themes/tale-aws_2020-10-23/assets/scss/tale/_syntax.scss
```

Now I've got the filename and can search for the commits the included it with via:

```bash
git log --summary --reverse -- prod/themes/tale-aws_2020-10-23/assets/scss/tale/_syntax.scss
```


This returns:

```bash
commit 08e8c42dc014c7c1f84815bb5f3872fb3d8ca6d1
Author: Alan W. Smith <user@example.com>
Date:   Fri Oct 23 23:25:32 2020 -0400

    Deployment Auto Commit

    create mode 100644 prod/themes/tale-aws_2020-10-23/assets/scss/tale/_syntax.scss

commit 13e190c2a04b0cb96d7e8573e9187f6aae30625f
Author: Alan W. Smith <user@example.com>
Date:   Sat Oct 24 18:58:44 2020 -0400

    Deployment Auto Commit

    delete mode 100644 prod/themes/tale-aws_2020-10-23/assets/scss/tale/_syntax.scss
```

So, the commit where I deleted the file was `13e190c2a04b0cb96d7e8573e9187f6aae30625f`. I need to checkout the file from the commit _before_ that one. This is done by adding `~1`. This is the command I ran:

```bash
git checkout 13e190c2a04b0cb96d7e8573e9187f6aae30625f~1 -- prod/themes/tale-aws_2020-10-23/assets/scss/tale/_syntax.scss
```

If you get something like this error it means you didn't add the `~1`:

```bash
error: pathspec 'prod/themes/tale-aws_2020-10-23/assets/scss/tale/_syntax.scss' did not match any file(s) known to git
```

Once you do the checkout it'll restore the file and stage it so it's ready to be committed back into your repo and you're all set.