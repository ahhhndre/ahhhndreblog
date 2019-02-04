---
title: The Past 
subTitle: XAML to the Future
category: "DevOps"
cover: izuddin-helmi-adnan-1157887-unsplash.jpg
---
![Unsplash](izuddin-helmi-adnan-1157887-unsplash.jpg)
In December of 2017 I set a goal for myself to convert all the TFS (Team Foundation Server) builds from the Legacy XAML build engine to the latest version. The writing was on the wall at the time that XAML was going away on the next major version of TFS and now was the time. 

The Legacy XAML build engine was based on, you guessed it, one large hard to work with XAML file. It was especially hard as the version we were using had began with TFS 2010 and had mutated over time, versions and upgrades. When I had inherited the TFS Admin job as one of many roles I played as an Application Developer at the time I would avoid having to edit or modify the XAML file as much as possible. This caused the bloat to shift to an MSBuild file we called Common Targets. This file was much easier to read and did not have a GUI that would bog down when editing but the organization of the file had no rhyme or reason and in the end Common Targets grew to be over 20,000 lines of code.

Beyond the XAML file the other issue we had with our legacy builds was that there were magical files that did different bits of configuration littered all over the place. Some files had hard coded values for various environments and when you wanted to change one of these you had to jump through a bunch of hoops to make it work. I've always felt that your configuration should live along with you code in the same repo.

The final pain point we had with the legacy XAML builds was that changing branches was a tedious and time consuming process based on the way we had designed the builds. The was about six screens where you had to manually make changes to rename the branch to what ever you wanted.

At the end of the day it worked and for the last 7 or 8 years it has served us well. Yet like any technology something new comes to replace it. TFS 2015 introduced what was called vNext Build at the time the build engine Microsoft planed to build the future of TFS with. As of today, with all the renaming going on, this feature is called Azure Pipelines. Some of the benefits of this architecture include: creating builds is just simple orchestration, cross platform builds, simple core building blocks, and a large market place of extensions.
