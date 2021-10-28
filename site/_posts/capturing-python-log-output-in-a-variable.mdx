---
blurb: A quick snippet of code to pull console log output into a variable for later
  processing.
category: Python
date: '2013-01-27'
slug: /capturing-python-log-output-in-a-variable
tags:
- Development
- Code
title: Capturing Python Log Output In A Variable
type: post
---


While working on a Sublime Text plugin, I needed to capture logging output in a variable so I could display it easily. For once, Stack Overflow<sup>1</sup> didn't have an immediate solution. After a couple hours of hacking around, I came up with the following which I hope saves others the hassle of having to build it themselves. 

	import logging
	import io

	### Create the logger
	logger = logging.getLogger('basic_logger')
	logger.setLevel(logging.DEBUG)

	### Setup the console handler with a StringIO object
	log_capture_string = io.StringIO()
	ch = logging.StreamHandler(log_capture_string)
	ch.setLevel(logging.DEBUG)

	### Optionally add a formatter
	formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
	ch.setFormatter(formatter)

	### Add the console handler to the logger
	logger.addHandler(ch)


	### Send log messages. 
	logger.debug('debug message')
	logger.info('info message')
	logger.warn('warn message')
	logger.error('error message')
	logger.critical('critical message')


	### Pull the contents back into a string and close the stream
	log_contents = log_capture_string.getvalue()
	log_capture_string.close()

	### Output as lower case to prove it worked. 
	print(log_contents.lower())

*Note that once you call '.close()', it's possible to run into problems if the same running process tries to call the function again.*

This approach will work with external files too. If you assign the same logger (in this case 'basic_logger') it will output properly. For example, if you have an module in an external file called 'external_logger_test.py' with the content:

	import logging

	def log_test():

		logger = logging.getLogger('basic_logger')

		logger.warning('Log note from external file')

All you have to do is import it as usual in your main file (e.g. `import external_logger_test`) and then call the function:

	external_logger_test.log_test()

Of course, you have to do this before you call the `log_contents = log_capture_string.getvalue()`. That's where the log data stops flowing.



---


_Links and Notes_

1. [Stack Overflow](http://stackoverflow.com/) - Friend to developers around the world. Far and away the most useful development research site there is.