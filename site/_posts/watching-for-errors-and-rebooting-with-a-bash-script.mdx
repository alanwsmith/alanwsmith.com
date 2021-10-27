---
category: bash
date: '2017-12-20'
slug: /watching-for-errors-and-rebooting-with-a-bash-script
tags:
- cli
- hacks
title: Watching for Errors and Rebooting with a Bash Script
type: post
---


#### The Problem:

- A hardware issue on one of my FreeNAS servers<sup>1</sup> causes hard drives to disappear every few hours
- When the drives disappear, it puts my data at risk<sup>2</sup> 

#### Warning Sign:

- Prior to the failure, the system's `dmesg`<sup>3</sup> command starts showing `ahcich#: Timeout` errors like these:

        ahcich2: Timeout on slot 10 port 0
        ahcich2: is 00000000 cs 00000400 ss 00000000 rs 00000400 tfd 50 serr 00000000 cmd 10008917
        ahcich4: Timeout on slot 31 port 0
        ahcich4: is 00000000 cs 80000000 ss 00000000 rs 80000000 tfd 50 serr 00000000 cmd 10009e17
        ahcich4: Timeout on slot 19 port 0
        ahcich4: is 00000000 cs 00080000 ss 00000000 rs 00080000 tfd 40 serr 00000000 cmd 10009217

#### Goal:

- Write a bash script to run once an hour that watches for the `Timeout` errors and reboots the machine if it sees one<sup>4</sup>


#### My Solution - Version 1 (Shameless Green):

The first thing I did was to write a Sandi Metz<sup>5</sup> style Shameless Green<sup>6</sup> version of the script. Meaning, I wrote the quickest thing I could put together that met my minimum requirements of:

1. Watch for Timeout errors
2. Reboot if one is found

Here's what I came up with:

    #!/bin/bash

    dmesg | grep Timeout

    if [ $? == "0" ]
    then
        /sbin/shutdown -r now
    fi

The way it works is:

1. Run the built-in FreeNAS `dmesg` command and pipe (i.e. `|`) the output to `grep` to search for the word `Timeout`.

    If a `Timeout` has occurred, then `grep` will identify the match which results in an exit code<sup>7</sup> of `0` for the line 
    
    If no `Timeout` has occurred, the exit code is something other than `0`. It's usually `1`, but I don't really care what it is as long as it's not zero because I then...

2. Use the special `$?` bash parameter<sup>8</sup> to grab the exit code and compare it with `==` against zero inside an `if` conditional statement 

3. If the exit code stored in `$?` is zero, `then` I run the FreeNAS reboot command (`/sbin/shutdown -r`) with the argument `now` to tell the server to initiate a reboot immediately  

    Otherwise, nothing else happens and the script simply finishes without doing anything else  


#### Updated Solution:

I decided to add some logging after confirming the first version of the script worked as expected.

Here's the final version. (Detailing out what each line does is left as an exercise to the reader.)


    #!/bin/bash

    LOG_FILE="/mnt/z/depot/Files/mingus_protection_tools/ahcich_issue_rebooter/log.txt"

    DATE_TIME=$(date +%Y%m%d-%H%M%S)
    
    echo "${DATE_TIME}: Running script." >> $LOG_FILE

    dmesg | grep Timeout

    if [ $? == "0" ]
    then
        echo "${DATE_TIME}: Found a timeout. Rebooting." >> $LOG_FILE
        /sbin/shutdown -r now
    else
        echo "${DATE_TIME}: No Timeout issue found." >> $LOG_FILE
    fi


Putting that script in place is letting me move files off the machine without the Timeout issue building up to the point of failure. As long as nothing changes, it should keep my data safe while I move things that weren't yet backed-up to another machine.


### Footnotes

1. [This FreeNAS server](/32-terabytes-of-photo-storage), as a matter of fact.

2. The server is setup with 11 hard drives in [ZFS](https://en.wikipedia.org/wiki/ZFS) in RAID-Z3. Up to three can fail and my data won't be affected. However, if four fail at the same time _all_ the data across all eleven drives will be lost in a way that's basically impossible to restore.

3. More details about [dmesg vai it's manual page](https://www.freebsd.org/cgi/man.cgi?query=dmesg&sektion=8).

4. The script is run as the [root user](https://en.wikipedia.org/wiki/Superuser) via [cron](https://en.wikipedia.org/wiki/Cron) once an hour.

5. If you're not already familiar with her, you should check out [Sandi's work](https://www.sandimetz.com). Her Practical Object-Oriented Design in Ruby class with [Katrina Owen](http://www.kytrinyx.com) improved my programming by an order of magnitude.

6. While it took a while to get use to, I'm now in love with the term (and concept) of Shameless Green. It's a specific reminder to do the minimum possible amount of work to get a test to pass. Without it, I have a tendency to internally scope-creep new code in a way that usually comes back to bite me. That little reminder has done more to improve and speed up my programming than anything else I've learned in my 20+ years hacking at code. (Why yes... it does deserve it's own post. Said post is one of the many items on my TODO list.)

7. Here's more info on [Exit Status](http://tldp.org/LDP/abs/html/exit-status.html) (aka exit codes).

8. And, here' more info on [Bash Special Parameters](https://www.gnu.org/software/bash/manual/bash.html#Special-Parameters) including `$?`.