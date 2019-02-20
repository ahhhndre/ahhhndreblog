---
title: Debounce Pattern
subTitle: Explained With Examples
category: "Learning"
cover: luca-bravo-198061-unsplash.jpg
---

![Unsplash](luca-bravo-198061-unsplash.jpg)

While I was working through the [JavaScript 30 course by Wes Bos we went over a concept called debouncing that I wanted to dive into more detail. Debouncing is a pretty simple - it's a way to [limit the rate at which a function can fire](https://davidwalsh.name/javascript-debounce-function).

Now why would you want to do that? Well say you were building a feature where something happens on a page as the user is scrolling. You'll have added an event listener for this. Now it's firing to know where they are on the page. This can fire potentially hundreds of times causing your app perform poorly and react in unexpected ways - poor scrolling being the most obvious.

With a debounce function it will wait a set period of time and then run your function smoothing out the number of times it fires. You can also haveit run immediately and then wait a set period of time depending on your specific needs. Let's look at this exact example in more detail. First here's what the [debounce function](https://davidwalsh.name/javascript-debounce-function) looks like:

```javascript
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```

And here is how you would use us it:

```javascript
function checkSlide(e) {
  // do stuff related to scrolling
}

window.addEventListener("scroll", debounce(checkSlide, 250, false));
```

As you can see the debounce function is an example of a high-order function - a function that returns another function. By doing this it creates a closure which allows us to retain the arguments used by debounce in this case. In the example above the checkSlide function would only run after 250 ms as we had pass in false for the immediate value.

Choosing when to use or not use debounce isn't always a super obvious decision. I'd say if you are noticing performance issues then start adding some logging to see what's firing and make the call from there. Event listeners for things like scroll or mousemove are also good candidates for this by default.
