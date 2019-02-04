---
title: How to properly shut down Proxmox
subTitle: And any active VMs you might have
category: "DevOps"
cover: scott-webb-1121334-unsplash.jpg
---
![Unsplash](scott-webb-1121334-unsplash.jpg)
I wasn’t sure how to best tackle shutting down the host. I had read a lot of comment in my research on other things like files systems and what not that shutting things down needed to be done in a specific way with anecdote of lost data. This made me pretty paranoid about this at this early stage where I don’t really have backups and wanting to get into good habit form the start.

Ends up that it’s pretty simple: just use the shutdown button the in Proxmox web portal. It will handle shutting down your VM for you and then shut the server itself down after. Keep in mind that the web portal interface won’t go to a shutdown page and will look like it’s not wiring but you should hear or see that your host server has been shut off completely.
