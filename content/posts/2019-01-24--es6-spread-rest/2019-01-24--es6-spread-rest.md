---
title: Spread & Rest
subTitle: New ES6 Features to Me
category: "Front-end"
cover: jonathan-riley-118591-unsplash.jpg
---

![Unsplash](jonathan-riley-118591-unsplash.jpg)

While working through the [ES6](https://es6.io) course by [Wes Bos](https://webbos.com) we were shown two new features that I think are really powerful and extremely useful - spread and rest. They are also like two sides of a coin so going over them together makes the most sense.

**Spread operator** will take anything that is an iterable like a string or an array and expand it. Say I had two arrays and I wanted to join them while adding an item in the middle. Here's how you would do it before and now with spread:

```JavaScript
const nbaWest = ['Warriors','Lakers','Jazz']
const nbaEast = ['Raptors','Celtics','Bucks']

// old school
let oldNba = [];
oldNba = oldNba.concat(nbaWest);
oldNba.push('Spurs');
oldNba = oldNabe.concat(nbaEast);

// Using rest operator
const newNba = [...nbaWest, 'Spurs',...nbaEast]
```

**Rest parameters** on the other hand will take a list of arguments and combine them together into an array. On example of where you might want to use this is if you have a function where you might have an infinite number of arguments but the first few are static. A concrete example of this would be a tip calculator where you get the tip amount broken up for each item but the first two arguments are the tax rate and the tip percentage. Here's how that would look:

```JavaScript
// Function example
function tipCalc(taxRate, tipPercent, ...items){
  return items.map(item => item * tipPercent * taxRate);
}

// Example of using the function
const subTotals = tipCalc(0.07, 20, 12.50, 10.99, 24.78);
```
