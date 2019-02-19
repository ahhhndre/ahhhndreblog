---
title: Promises and Async & Await
subTitle: New ES6 Features to Me
category: "Front-end"
cover: jeff-brown-246391-unsplash.jpg
---

![Unsplash](jeff-brown-246391-unsplash.jpg)

While working through the [ES6](https://es6.io) course by [Wes Bos](https://webbos.com) we covered promises and Async and Await. These are two concepts that fit nicely together when it comes to asynchronicity in JavaScript. The one thing I'd like to stress is that Async and Await aren't the be all end all and that you should not need to uses Promises anymore. That's not the case and each have their purposes.

Promises in JavaScript are pretty similar to promises in life: they give you assurance that something will be done but they can either be kept or broken. Now Promises are often used when fetching data and doing AJAX work. I'm going to use that as my basis to explain what they are and how to use them. I'm going to just grab my Github user data using their API using Fetch with will return a Promise. Now the Promise I get back isn't JSON that I can work with it's just a blob or stream of data. I need to covert this into something that I can work with this is what I'm doing with "then". You can chain as many "then" as you need. Now you'll also want to add a "catch" so that you can handle any error (the promise wasn't kept). Last you can also add a "finally" if you need something to run regardless of if the promise was kept or broken. Here's this example in code:

```JavaScript
const userPromise = fetch('https://api.github.com/users/ahhhndre');
userPromise.then(data => data.json())
   .catch(err =>{
        console.log('There was an error fethcing Github user data');
        console.log(err);
    }).finally(()=>{
        console.log('Fetch completed')
    });
```

Now you can create your own Promise when you need it. Some examples of why you want to do this is if you had some AJAX code to run or something that was processing intensive or you had to send it off to the backend and wanted to move on and would handle it when you got a response back. The example below shows how we would create our own Promise to do something like this.

```JavaScript
const teams = ['Warriors', 'Lakers', 'Raptors'];
function getTeamByName(name){
    const p = new Promise((resolve, reject)) =>{
        const team = teams.find(team => team === name)
        if (team){
            resolve('Here is the team you were looking for');
        } else {
            reject('This failed to find the team or there was an error');
        }
    }
}
```

One other way you can take advantage of Promises to clean up your code is to promisify callback functions. I'm just going to show an example before and then with Promises as it will be easeir to see then to explain.

```JavaScript
// Old School
navigator.geolocation.getCurrentPosition(function(pos)){
    console.log('It worked', pos);
}, function(err){
    console.log('It failed', err);
}

// Using Promises
function getCurrentPosition(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
```

Async and Await are the new kids on the block for asynchronous JavaScript. They allow you code to be a little more clean to write and read and provide a better flow control. Using our function from our Promise example above here's an example of how they are used:

```JavaScript
async function fetchTeams(){
    const res = await getTeamByName('Lakers');
    console.log(res);
}
```

There are some really great articles on these topics at Hacker Noon so I'm going to link them here for further reading:

- [Should I use Promises or Async-Await](https://hackernoon.com/should-i-use-promises-or-async-await-126ab5c98789)
- [Understanding promises in JavaScript](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
- [Understanding async-await in Javascript](https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c)
