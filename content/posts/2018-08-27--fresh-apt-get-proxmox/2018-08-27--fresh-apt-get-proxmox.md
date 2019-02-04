---
title: How to get apt-get update working on a fresh Proxmox install
subTitle: Keeping things up to date
category: "DevOps"
cover: sawyer-bengtson-279785-unsplash.jpg
---
![Unsplash](sawyer-bengtson-279785-unsplash.jpg)
After a fresh install of Proxmox you may run into issues running apt-get or see errors in the task list along the lines of “command 'apt-get update' failed: exit code 100”. This is caused by the default repositories that are setup for Proxmox. These instructions should fix this:

1. First connect to the web portal
2. Then shell into the host from there or you can ssh into the host
3. Once on the host run: vi /etc/apt/sources.list
4. Then add: deb http://download.proxmox.com/debian stretch pve-no-subscription
5. Exit vi saving your changes
6. Then remove: rm -f /etc/apt/sources.list.d/pve-enterprise.list
7. Run apt-get update again and it should work

You'll want this working as it's the best way to keep Proxmox and its underlying Debian OS up to date with patches, security updates, etc.
