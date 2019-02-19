---
title: Git Commit Hooks
subTitle: How to keep your code neat and clean
category: "Learning"
cover: ben-o-bro-170472-unsplash.jpg
---

![Unsplash](ben-o-bro-170472-unsplash.jpg)

While I was taking the [ES6](https://es6.io) course by [Web Bos](https://wesbos.com) he talked about [git hooks](https://githooks.com/) and this was a bit of a revelation for me. At work, as I've mentioned before, we use TFVC and there are a few built in policies to prevent checkins with out certain criteria. For example not having a comment or not linking the change to a work item. I've been trying to figure out how to do the same with git (but not terribly hard 😉) and now I have an answer - git hooks!

Every git repo has a .git folder and within it there is a hooks folder. This folder contains a bunch of stock examples that you can take and modify to whatever your needs are. There are also numerous prebuilt hooks available if you look. Once you make your changes make sure to remove the .sample at the end of the file and then you are good to go.

In my case I want to do two things before you can check in: run ESLint and run Prettier. This seems pretty simple to do and here's how I might accomplished this:

1. Navigate to your repo, if you don't have one yet create it and then initialize it using `git init`
2. Now you should have a `.git` folder which has a `hooks` subfolder with a bunch of .sample files
3. You want the `pre-commit.sample` file and you want to rename it to just `pre-commit`
4. Open this file in your text editor of choice and remove all the code
5. Paste in the code from this [Gist](https://gist.github.com/rashtay/328da46a99a9d7c746636df1cf769675)

You now have ESlint running before every commit but that's not everything we wanted. It's not running Prettier! So how do we do that? Turns out we want to use [Husky](https://github.com/typicode/husky) which allows us to define our git hooks in our package.json like so:

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged",
    }
},
"lint-staged": {
    "*.{js,jsx}": [
        "eslint"
    ],
    "*.{js,jsx,json,md}": [
        "prettier"
    ]
}
```

Now with Husky setup both ESLint and Prettier will run as part of you commit workflow and keep your code properly formatted to your desires.
