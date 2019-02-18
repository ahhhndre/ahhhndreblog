---
title: "New CI Build"
subTitle: XAML to the Future
category: "DevOps"
cover: francesco-ungaro-1354822-unsplash.jpg
---

![Unsplash](francesco-ungaro-1354822-unsplash.jpg)

The is a continuation of a series of posts on the work I did to transition from Legacy XAML builds to Azure Pipelines in December of 2018.

Having decided to tackle the CI build first I broke the current version down into steps. From reading the documentation for the new build engine and previously playing around with it I found that it was pretty procedural in nature. Having a list of steps would make this much easier.

The CI build broke down like so:

1. Get the code
2. Build the code
3. Deploy the development database
4. Run a subset of automated tests
5. Reject the build if any of this fails

When you create a new build using this new architecture the first step is to what type of version control you are using - TFVC or Git. Then you select your repo from there. We use TFVC at work and seeing as there isn't many examples using it that's what I'm going to use.

The new build works of the concepts of tasks. Your build might be one task or it could be dozens. For the next step of building the code I just used the stock Visual Studio Build build task. There's not many options just pick the solution you want to build, set the platform (x86, x64, etc.) and configuration (Debug, Release, etc.), and pick which version of Visual Studio you want to build with. There's also an option you can use to Clean the workspace the build is using, I set this to false as it will speed up your builds in my experience but when I run into issues I will turn this off to get a clean base to work from.

Now deploying the database was a lot trickier then expected. To start I hunted around the existing tasks and search around the extension marketplace thinking I might find something there but there was nothing for some thing this specific. I finally decided that I should just roll my own but at the time I wasn't sure how. We are using SSDT (SQL Server Data Tools) for our database project so I did some digging and there was some command line tools as part of SSDT that would let me do what I wanted - specifically SqlPackage.exe. Now how do I get that to work with the build? The answer turned out to be key to all my woes getting our builds modernized - PowerShell! I was able to create a script to do everything I needed and the bonus was that I could check this in along with my code so that everything was in the same place and not scattered around the place.

Running tests was as simple as building the code. Just grab one of the included tasks, in this case Visual Studio Test build task, configure a few settings and you are good to go. In my case the one special requirement was to run a subset of tests. Being as our tests were already marked with traits this was easily done by

Rejecting the build on failure was terribly easy. Under the section you just picked gated and if any of the tasks failed by default the build would fail and reject the changes.
