---
title: Adding ISOs to Proxmox
subTitle: and using them as Templates for VMs
category: "DevOps"
cover: abdelmalek-bensetti-1104443-unsplash.jpg
---
![Unsplash](abdelmalek-bensetti-1104443-unsplash.jpg)
If you want to use an OS or version of an OS that’s not listed as one of the default Templates in Proxmox it’s pretty easy to do that. Just navigate to the local storage node and you should see an active Upload button. Click on it and you should get a dialog to upload either an ISO or Container image. I wanted to add the latest versions of CentOS in its minimal and DVD installs so I used ISO and then selected the file on my machine and clicked upload. This will take a bit of time to upload the ISO depending on size and network setup but once it’s done should show up in the list. You can now select this ISO when creating a new VM on the OS tab using the ISO image drop-down.
