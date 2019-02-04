---
title: Getting additional disks setup
subTitle: With names in Proxmox
category: "DevOps"
cover: jayden-chong-1157599-unsplash.jpg
---
![Unsplash](jayden-chong-1157599-unsplash.jpg)
I have 4 main drive zones for my Proxmox setup: 250gb SSD for the host, 500gb SSD for the core VMs, 500gb SSD for the applications I’m developing and some of their related systems (web and database servers) and finally a 2tb HDD to use as additional storage and for backups.

To make this easier to separate into logical regions I did some digging and you can use LVM (Logical Volume Management) to create groupings of various drives (I’m calling them groupings because containers might cause confusion with Docker containers and I can’t think of a better description). In my case they are already grouped by physical drive but if I wanted to add more storage to a particular LVM grouping I could just extend the LVM and the new storage would be available for use as if it was always there.

To do this would want to partition your drive using fdisk and then use mkfs to add the ext4 file-system. I also use lsblk to get a nice ASCII visual of the drives as I walk through each step.

Now at this point you can use the LVM tools to create your LVM groupings. You’ll use the pvcreate command to create a physical volume. For my setup I did that with each drive. Then you’ll run the vgcreate command which will take the name you want to give your grouping. If you have several drives you want to put into the group just list them out after the name.

For my setup at this point I had the following LVM grouping:

- CoreDrive - 500gb SSD
- AppDrive - 500gb SSD
- StorageDrive - 2tb HDD

You are now ready to add the drives for use in Proxmox. To do that log into the web portal and navigate to the Datacenter node then select Storage. At this point you see just local and local-lvm if you don’t have any other drives setup which was the case for me. Click on the Add button and select LVM. In the dialog that opens for ID give it a name and then for Volume group select the drive you want to use. In my case the ID matched the name of the volume group. I also left all the other setting as is then click add.

Proxmox will do some thinking for a few seconds and then your grouping should show up in the list and also as a node on the left hand side which I didn’t expect but will come in handy to keep my VMs grouped nicely together.
