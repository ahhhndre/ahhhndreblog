---
title: How to fix semanage command not found
subTitle: Batteries are not always included
category: "DevOps"
cover: jayden-chong-1157598-unsplash.jpg
---
![Unsplash](jayden-chong-1157598-unsplash.jpg)
You may get this message when you try to run the semanage command using a fresh CentOS 7 install. You need to first find what yum package contains the command:
```
yum provides /usr/sbin/semanage
```
Which should give you the package you need to add, which at the time of writing this post was:
```
policycoreutils-python
```
All you need to do now in a simple yum install like so:
```
yum install policycoreutils-python
```
For reference, if you are wondering what semanage is for, from the documentation: semanage is used to configure certain elements of SELinux policy with-out requiring modification to or recompilation from policy source.
