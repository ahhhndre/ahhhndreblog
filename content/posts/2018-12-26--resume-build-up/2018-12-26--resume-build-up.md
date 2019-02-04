---
title: Resume up, break it down! 
subTitle: Review of my recent resume rebuild
category: "Front-end"
cover: harry-cunningham-1273668-unsplash.jpg
---
![Unsplash](harry-cunningham-1273668-unsplash.jpg)
I've been working on building my resume as a website for the last 2 weeks. I posted the first deployable version of it today. 

Seeing as I haven't touched in the last ten years it needed a major re-write. Based on the scope and wanting to have it in a technology that will be easier to update I went with simple HTML and CSS. I'll be adding some JavaScript but that's for a later version.

I've already talked about Skeleton CSS which I'm using as the base layer. I won't go in too much detail but it's a nice and simple framework with a stripped down feature set. I wanted to use a few icons to break up all the text, for that I turned to Font Awesome. They have what I think are the best set of free icons available. For my actual font I'm using Fira Code, which I have been using in Sublime and VS Code, and I love it. I like that it gives my resume a text editor feel and is still easily read able.

I've added a few not so obvious items:

 - When you print the page, the print and download links change to my resume's URL in the header and footer. You can't use links on printed paper, eh?
 - More formatting is also applied for print to make it fit nicely in two pages or less
 - The profile picture also changes to a monogram of the initial of my last name - W - when printed
 - All the links are setup to work in the PDF version too, so the email link opens the default email client and the phone number is linked to the default phone app.

For hosting I went with Netlify, which is what I'm using for this blog, seeing as it was impossibly easy to use, the cost of free is hard to beat, and the feature set is exactly what I needed.

I do have a few wish list items to make this even better:

- Automated PDF generation, I found a package on NPM to do this but it doesn't match the output of printing from Chrome and exporting that to a PDF. Not sure why as it uses Puppeteer which is based on Chrome.
- Templating, once I started creating cover letters I realized that having to copy and paste the header and footer is tedious and error prone if I end up making changes. I'd like to use Handlebars for this
- Index page for the cover letters just to make it easier to navigate them to review, edit, and generate the PDF
- There are a few content items that I would like to add like a short profile, some of my recent volunteer works, and maybe some of my more historical work experience but in shorter point form. These would not show up on the print version as they would make it too long

With all that being said I'm super happy with how this turned out!
  

