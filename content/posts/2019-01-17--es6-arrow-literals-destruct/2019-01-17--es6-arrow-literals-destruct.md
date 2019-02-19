---
title: Arrow Functions, String Literals, and Destructuring
subTitle: New ES6 Features to Me
category: "Front-end"
cover: andreas-brucker-630339-unsplash.jpg
---

![Unsplash](andreas-brucker-630339-unsplash.jpg)

While working through the [ES6](https://es6.io) course by [Wes Bos](https://webbos.com) we went through several new features. There are three I'd like to highlight here: Arrow Functions, Template Strings, and Destructuring

**Arrow Functions** are a nice clean way to write functions without some of the boilerplate. Here's an example using an array and the map function:

```JavaScript
const names =['Bob', 'Mary', 'Jeff', 'Sally']
//Old school
const oldSchool = names.map(function(name){
  return name.length;
});

//Arrrow function
const newSchool = names.map(name => name.length);
```

Now you don't want to always use arrow functions for everything as you might get an unexpected result. One of those is that the scope of "this" isn't always what you would expect it to be. A good example would be using an arrow function when adding an event listener. There are others so keep your eye out.

**String Literals** allow us to make nice strings without all the concatenations or special characters to represent line breaks. There are endless ways that you can use this new feature but one example I've seen is being able to generate dynamic HTML and/or CSS. To create a string literal you use back ticks (the key to the left of the number 1 on your keyboard) and then when you want to insert a variable you use \${}. Here's a few examples of it in use:

```JavaScript
// Building up some HTML
`<li>
  <span class="name">${cityName}, ${place.state}</span>
  <span class="population">${numberWithCommas(place.population)}</span>
</li>`;

// Adding some text to the screen using the ternary operator to handle the leading zero
endTime.textContent =  `Be Back At ${hour  >  12  ?  hour  -  12  :  hour}:
${minutes  <  10  ?  '0'  :  ''}${minutes}`
```

**Destructuring** allows us to unpack items from arrays or objects into variables in a clean and simple way. One tricky thing is that when working with arrays you use the square brackets but when working with objects you use the curly brackets. As this one is hard to describe I'm going to show it as an example:

```JavaScript
// Old school
const details = ['Andre Wanlin', 38, '@ahhhndre'];
const name = details[0];
const age = details[1];
const twitter = details[2];

// New school using destructuring
const [name, age, twitter] = details

// You can also put left overs into an array using the rest operator
const players = ['Andre', 'Suzy', 'Derek', 'April'];
const [captain, assistant, ..team] = players
```
