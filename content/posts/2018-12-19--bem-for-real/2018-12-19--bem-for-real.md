---
title: BEM, for real?
subTitle: Yes, it's a Drake reference
category: "Front-end"
cover: duane-swaby-1244317-unsplash.jpg
---
![Unsplash](duane-swaby-1244317-unsplash.jpg)
While I was working on building up my resume as a web page I found myself trying to figure out a nice way to name selectors in my CSS so they would be easy to figure out as I worked between the HTML and CSS. I came across a bunch of options but BEM - Block, Element, Modifier - seems to be simplest and easiest to pick up.

I'm going to use my resume as the basis of my example to explain BEM. I divided it into sections - profile, experience, skills and education. The first part of BEM is the Block which I like to think of as the parent. In my case that would be each section of my resume I've listed here. So for education you could have something like this:

```CSS
.education {}
```
Now within the education section of my resume I list out the schools I attended. This leads us to the second part of BEM - the Element (or for me the child). To separate the two we use two underscores. The CSS for this would look something like this:

```CSS
.education__school {}
```
The final part of BEM is the Modifier. These are used to modify the block to do things like apply color or change its size. We use two dashes to separate the block from the modifier. Keeping with our current example we might have something like this:

```CSS
.education--big {}
.education--blue {}
```
This is a very basic example and breakdown of BEM. You can get a full detailed explanation of BEM at [getbem.com](http://getbem.com/).

