---
title: Tower of Babel?
subTitle: Basic Transpiling Overview
category: "Frontend"
cover: grant-lemons-80424-unsplash.jpg
---

![Unsplash](grant-lemons-80424-unsplash.jpg)

While working through the [ES6](https://es6.io) course by [Wes Bos](https://webbos.com) we went over the basics on transpiling using Babel. I'm sure you are asking yourself what the heck is transpiling? Well it's the process of taking, in this case Javascript, code and converting it into a different format or version. The next thing you'll probably be asking is why? Well ES6 introduced features like arrow functions and string literals which are awesome and make life easier for JavaScript developers but older browser don't know how to under stand this new syntax.

Enter Babel which will take your nice and fancy ES6 and beyond code and convert it back down to older JavaScript syntax that can be read by older browsers. To get this to work you need to have a package.json file and install the Babel CLI and you can use npm to do that. Now add the babel command to your package.json file like so (or something similar):

```JSON
"scripts": {
  "babel": "babel app.js --watch --out-file app-compiled.js"
}
```

Now you can choose to compile all you JS down to ES5 but that's becoming less and less desirable as older browser drop off. What you will find is better is to use the babel-preset-env npm package. To start using this you can create a .babelrc file or you can add it to the package.json file like so:

```JSON
"babel": {
  "presets": [
  ["env",
    {"targets": {
      "browsers": [
        "last 2 versions",
        "safari >= 8"]
        }
      }
    ]
  ]
}
```

This will now use the last 2 versions of all the browsers and safari greater than or equal to version 8 to determine what to use when you run babel.

Now this doesn't solve everything when it comes to ES6 and beyond but it does get you closer. The other part of this puzzle you'll need to figure out is polyfills and I have a post on that coming next week
