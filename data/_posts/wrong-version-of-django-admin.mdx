---
category: Django
date: '2020-10-23'
slug: /wrong-version-of-django-admin
tags:
- Python
title: Fixing A Wrong (Old) Version Of django-admin
type: post
---


I ran into a problem where `django-admin` wasn't working properly. It kept making projects based on an old version of django. 

For example, I setup a project on my mac with:

```bash{numberLines: true}
mkdir django_project
cd django_project
python3 -m venv venv
source venv/bin/activate
pip install django
```

The results were:

```python{numberLines: true}
Installing collected packages: sqlparse, pytz, asgiref, django
Successfully installed asgiref-3.2.10 django-3.1.2 pytz-2020.1 sqlparse-0.4.1    
```

So, the expected 3.1.2 version is there. But, when I run:

```bash
django-admin --version 
```

I get:

```bash
1.11.29
```

It took a while to figure out, but I finally ran `which` and got this:

```bash
$ which django-admin
/usr/local/bin/django-admin
```

For some reason, the system version of `django-admin` was being picked up picking up even though I was inside the venv virtual environment. I have no idea what's going on there, but I deleted that old version and things worked as expected. 

```bash
$ which django-admin
/Users/alans/Desktop/django_project/venv/bin/django-admin

$ django-admin --version
3.1.2

```

Look for those old versions if you're running into a similar problem.