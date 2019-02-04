---
title: Homelab Server
subTitle: Shopping List
category: "Hardware"
cover: anders-jilden-219256-unsplash.jpg
---
![Unsplash](anders-jilden-219256-unsplash.jpg)
I want to be able to learn more about a bunch of tools and practices but with my current hardware - a MacBook - I'm at a disadvantage. Doing some research into what my options might be I discovered the Homelab DIY community. They basically find older hardware and reconfigure it into useful systems for doing things like hosting VMs or learning new networking techniques, or anything else you can think of.

With this idea in mind I've decided to build myself a server with some older hardware that I'll source from eBay and a little help from Amazon. Here's what I've decided on:

- CPU: [Intel Xeon E5-2670 2.6GHz Eight Core](https://ark.intel.com/products/64595/Intel-Xeon-Processor-E5-2670-20M-Cache-2-60-GHz-8-00-GT-s-Intel-QPI-) - I'm getting two of these which will give me 16 cores which based on my needs means I could run 32 VMs with them
- CPU Fans: [Cooler Master Hyper 212 EVO](http://www.coolermaster.com/cooling/cpu-air-cooler/hyper-212-evo/) - I'm getting two of these ones as well, one for each CPU and they should keep everything running at the right temperature
- RAM: 64gb Samsung 4x 16GB 2RX4 PC3L-12800R DDR3 Reg ECC Server Memory - This should give me plenty of breathing room for running what I need
- Motherboard: [ASRock EP2C602-4L/D16](https://www.asrockrack.com/general/productdetail.asp?Model=EP2C602-4L/D16#Specifications) Server Motherboard - this board supports the older CPUs and the RAM that I'm getting, there's also space for more RAM if I need to expand down the road
- Case: [Phanteks Enthoo Pro PH-ES614P](http://www.phanteks.com/Enthoo-Pro.html) - This is pretty much the only case that I could find at a reasonable price that will fit my motherboard
- Storage: [WD Blue 3D NAND SSD](https://www.wd.com/products/internal-ssd/wd-blue-3d-nand-sata-ssd.html) one 500gb and one 256gb - The 256 will be used for the host OS and the 500 will be used for all the VMs
- Power Supply: [EVGA SuperNOVA 750](https://www.evga.com/products/product.aspx?pn=220-G2-0750-XR) - This should give me all the power I need and it's designed to support 2 CPUs

This Homelab server will allow me do to some of the following:

- Spin up an environment where I can do [blue green deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html) and learn the process
- Run [Jenkins](https://jenkins.io/), [Jira](https://www.atlassian.com/software/jira), [Confluence](https://www.atlassian.com/software/confluence), and [BitBucket](https://bitbucket.org/) so I can learn how these tools work, how to administer them, and use them to future projects
- Learn more about [CentOS](https://www.centos.org/) Linux and force myself to get more comfortable with the command line
- Explore using [Docker](https://www.docker.com/), [Kubernetes](https://kubernetes.io/), and all the related technologies

I'm pretty excited as these are all things I'd really like to know more about!
