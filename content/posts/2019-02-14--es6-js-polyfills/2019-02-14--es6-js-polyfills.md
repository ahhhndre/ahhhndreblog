---
title: JavaScript Polyfills
subTitle: Making sure all your JS works
category: "Front-end"
cover: joey-kyber-121699-unsplash.jpg
---

![Unsplash](joey-kyber-121699-unsplash.jpg)

While working through the [ES6](https://es6.io) course by [Wes Bos](https://webbos.com) we went over JavaScript polyfills. These are basically a way to add new functionality that has been added by ES6 and beyond to older browsers. This is accomplished by adding the missing feature to the prototype.

Let's take Array.From as an example. We can find the polyfill for this [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill) at the Mozilla Developer Network. Now you can simply grab this code and add it to your script. Another more elegant way for you to do this is Polyfill.io which you add as a script tag to your page and it will determine based on the browser what polyfills to add so you don't need to hunt around for them.

Polyfills are extremely helpful as they allow you to work with new features introduced each year yet still support older browsers. Not everyone has the luxury of having an evergreen browser every time they access the web so we need to be sure to support them.
