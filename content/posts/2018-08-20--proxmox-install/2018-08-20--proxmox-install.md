---
title: Installing Proxmox
subTitle: VM Host OS
category: "DevOps"
cover: warren-wong-247290-unsplash.jpg
---
![Unsplash](warren-wong-247290-unsplash.jpg)

So I’ve got my Homelab sever built and ready to use. I've decided that I'm going to use [Proxmox](https://www.proxmox.com/en/) as the virtualization host OS. Proxmox uses KVM for virtualization and is based on Debian. It’s also free and open source and if you want you can pay for a subscription to get full support, I won’t as I’m trying to keep cost down and force myself to learn how to handle issues on my own. I’ll be using this as the virtualization host for the VMs I’m going to be using to build and test applications I’m working on and to practice and learn DevOps practices.

I’m going to be using a USB install for this. To do that I juts downloaded the latest Proxmox ISO, and as I’m using macOS to do this I had to [convert it to a DMG file](https://pve.proxmox.com/wiki/Install_from_USB_Stick#_instructions_for_osx). Using the DMG file add it as the boot drive. Proxmox has good instructions on it wiki for this. The only issue with the command they used was it didn’t like the star so I had to type in the full files names to get it to work properly.

With the USB drive ready I just had to connect it to my Homelab and boot to it. Make sure you have a network connection, this will make things easier down the road. From there it just a few simple steps: select the drive you want to install to (options will let you pick the file system, I used ext4 which is the default), the next screen you pick country and time zone (the country should be selected for you, I think it uses your IP address for that), then you pick a root password and an email address to get alerts, and finally you’ll be asked for some network configuration (I only changed the Hostname to pve.hl.local). The install will only take a few minutes if that and when done will reboot itself (with a short warning to take the CD out and in my case that would be the USB drive) and then you end up at the Proxmox shell with a listing of the IP address where you can access the web portal.

I just jumped back onto my MacBook and loaded up the IP address in my browser (with port 8006). Voila I was being asked to log in. I put in the root credential setup in the install and I was in. At this point I would suggest adding another user with a different password and not using the root account, I don’t have a good rational for this but I think it comes from work so that you have a clear way to track who did what.
