---
title: Better the 2nd Time Around?
subTitle: Installing Proxmox
category: "DevOps"
cover: scott-webb-1079508-unsplash.jpg
---
![Unsplash](scott-webb-1079508-unsplash.jpg)
My intended architecture was to use a 250gb SSD to store the Proxmox install and anything that the host needed like ISO file to use for creating VMs. I would then use a 500gb SSD for the VMs themselves. For some reason that didn’t work I would get an error about portioning the drive every time so I cut my loses and installed on the 500gb SSD and had planed to send the 250gb SSD back as I figured it was bad. This gave me an opportunity to play around with Proxmox and learn a few things.

A few weeks later I decided to order another 500gb SSD and a 2tb HDD for backups. When these drives showed up I figured I would give the 250gb SSD another shot. I didn’t have anything I cared about on Proxmox so I took the plunge and installed the hardware as I wanted it to be setup in the server.

Using the Proxmox shell from the web portal I used fdisk with all the default to partition each new drive and mkfs to put the ext4 file-system on each new drive. Once this was done I hooked up a monitor, keyboard and mouse to the server itself and plugged in my USB install of Proxmox and held my breath.

I’m not going to get into the install details but I was able to get it installed onto my 250gb SSD as I wanted but ran into issues after the install where it still wanted to boot to the original 500gb SSD and I would be left with a Grub Rescue prompt. After some googling around someone suggested leaving just the drive that should be the default boot connected and the rest unconnected so I figured this is a low risk idea so why not. Ends up that worked. I added each new drive one at a time and booted into the Proxmox command line and got all the drives online and working.
