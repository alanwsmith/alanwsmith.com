---
category: Miscellaneous
date: '2009-04-10'
slug: /controlling-subversion-svn-with-perl
title: Controlling Subversion svn with Perl
type: post
---


Controlling Subversions "svn" command with Perl can be a little
tricky. The biggest issue is the fact that svn errors are sent to
STDERR instead of STDOUT. If you are running the svn command via
backticks, perl only captures STDOUT which means you won't see
errors. One way around this is to setup the command you fire off in
Perl so that it sends STDERR messages to STDOUT so that 100% of the
svn output goes back to your Perl script. This can be done by using
something like:

> my $response = \`$cmd 2\>&1\`;

With that, both the STDOUT and SDTERR output is captured in
"$response". If you check out
[this page on perl.com](http://www.perl.com/doc/FAQs/FAQ/oldfaq-html/Q5.15.html),
you'll see how to determine which content is sent to STDOUT and
which is sent to STDERR. This could be used to split out the
responses are respond accordingly in your script. I like to
approach it a little differently.

Since I already know what the svn command I send will do if it
works, I don't really care about the success messages. I only need
to know if something goes awry so I can deal with it appropriately.
To do this, I use svn's "-q" argument for quite output. With this
set, all the commands I use don't return any content to STDOUT if
they succeed, while the report errors to STDERR. So, if nothing
comes back, everything is good, but if I get a response, something
went wrong.

A simple script that tries to export would look like this:

> \#!/usr/bin/perl -w
> use strict;
> 
> my $svnCmd = 'svn -q export http://www.example.com/svn/path';  
> my $svnResp = \`$svnCmd 2\>&1\`;
> 
> if($svnResp)  
> {  
>   print "Something went wrong. SVN Error:\\n";  
>   print $svnResp;  
> }  
> else  
> {  
>   print "Success!\\n";  
> }

Since there isn't a svn server at the above example.com URL,
running this as is would fail and respond with something like:

> Something went wrong. SVN Error:  
> svn: PROPFIND request failed on '/svn/path'  
> svn: PROPFIND of '/svn/path': 405 Method Not Allowed
> (http://www.example.com)

If you change the URL to an actual repository you have access to,
you'll receive the "Success!" message if you are able to output.
Once you have the ability to determine the success or failure of
the svn command, it is a lot easier to manage Subversion via
scripts. The other benefit of this is that if you run the script in
a crontab, the STDERR doesn't get kicked over to send out emails.