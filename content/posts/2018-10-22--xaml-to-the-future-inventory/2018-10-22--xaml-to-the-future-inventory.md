---
title: Build Inventory
subTitle: XAML to the Future
category: "DevOps"
cover: samuel-zeller-360488-unsplash.jpg
---
![Unsplash](samuel-zeller-360488-unsplash.jpg)
The is a continuation of a series of posts on the work I did to transition from Legacy XAML builds to Azure Pipelines in December of 2017.

The first step I took was an inventory of the different build types we were using. My thinking was that the most simple build would be the easiest starting point and I could build from there. We had a lot of builds but there wasn't many variations:

 - **CI (Continuous Integration) Build** - this was a gated check-in build that would compile the code, deploy the development database and run a small subset of our automated tests. The development team had agreed this was the minimum for new code to be checked in. If the build failed no code was checked-in.
 - **Nightly Test Build** - this build would run every night the entire test suite. We had different versions of this same build as we had a legacy test suite and a more modern test suite but they could not run together.
 - **Staging Build** - this build would compile the code into the various components: 2 windows services, a ClickOnce installer for the client, and a database schema compare script. The files were then placed in a staging folder.
 - **Deployment Build** - this build would actually deploy the code to what ever environment it was configured for. It would stop the destination services, copy over all the new files into their proper locations, do an automated database schema update, and finally start up the services again

Based on this I decided that the CI build would be my best starting point. It was used most often and I could run it as often as I wanted without impacting the rest of the team.

