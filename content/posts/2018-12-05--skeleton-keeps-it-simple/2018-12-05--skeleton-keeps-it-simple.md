---
title: Skeleton CSS Keeps it Simple
subTitle: But watch what GitHub repo you're looking at
category: "Front-end"
cover: swan-leroi-1204944-unsplash.jpg
---
![Unsplash](swan-leroi-1204944-unsplash.jpg)
When I decided to put my resume online I wanted to keep things as simple and light as I could. I looked at a few frameworks and was leaning towards using Bootstrap based on it's popularity but my coworkers had been talking about Skeleton CSS so I gave it a spin. For what I was doing Skeleton was simple, light and easy for me to get rolling.

Skeleton is based on a twelve column grid with a few handy options for in between like half or thirds. There are also some handy utility classes to help as needed. As someone who hasn't done web development for a little while I found the concepts and keyword easy to understand and get something on screen quickly. In a few hours of work I had the core resume built with the responsive layout I wanted without having to touch the actual Skeleton CSS file.

One draw back I did find using Skeleton is that it seems to be no longer in active development which in and of itself isn't a big deal. But there seems to be two repos in GitHub with slightly different documentation and options. I ran into this issue when I was trying to figure out how to center my footer and was having issues. I found a wiki on GitHub then referenced a utility class I could use and I thought my problem was solved but it didn't do anything. After looking at the Skeleton CSS file I was using i found that it did not have the class!

This lead me to take a closer look at the Wiki and it ends up that a group of people have taken the Skeleton CSS and created shared organization to keep it up to date and called it Skeleton Framework. The only thing is that there hasn't been any changes in this new repo in over a year.

Original Skeleton CSS repo - https://github.com/dhg/Skeleton/
New Skeleton Framework repo - https://github.com/skeleton-framework/skeleton-framework

For my purposes I used the original Skeleton CSS and added the utility classes created by the new Skeleton Framework repo.
