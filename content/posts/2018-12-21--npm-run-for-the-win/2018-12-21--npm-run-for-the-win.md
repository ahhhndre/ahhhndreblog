---
title: NPM run and puppeteer-pdf, for the win!
subTitle: Or maybe not upon further review
category: "Front-end"
cover: pierre-chatel-innocenti-1200277-unsplash.jpg
---
![Unsplash](pierre-chatel-innocenti-1200277-unsplash.jpg)
One of the feature I really wanted to implement for my resume website was to have it generate a PDF version as part of my CI process. When I first started I would just print my resume from Chrome and then save it as a PDF. The output was to what I expected but the manual steps were tedious.

After a little searching I figured out how to do this using headless Chrome from the command line 
```
/Applications/Google Chrome.app/Contents/MacOS/Google 
Chrome --headless --disable-gpu --print-to-pdf=filename.pdf
--no-margins --displayHeaderFooter=false source-file.html
```
This wasn't too elegant and there isn't much control on the output specifically removing the header and footer. But seeing as this was a workable solution I moved forward with trying to figure out how to automate this.

Automation did not come as easy as expected. I haven't been doing a lot of web development over the last few years so I'm a little behind in all the tooling that is out there. First I looked at [Grunt](https://gruntjs.com/), then [Gulp](https://gulpjs.com/), and settled on [Webpack](https://webpack.js.org/) after spending a fair amount of time researching each. But as I was learning how to use Webpack I found out that I can run what I wanted with [NPM](https://www.npmjs.com/) pretty simply by adding the commands to package.json as a script entry:

```
"scripts": {
"localPdf": "/Applications/Google Chrome.app/Contents/MacOS/Google 
Chrome --headless --disable-gpu --print-to-pdf=filename.pdf
--no-margins --displayHeaderFooter=false source-file.html"
}
```
Then I could run it like this:
```
npm run localPdf
```
There is a way to use parameters instead of having them hard coded in the package.json file but as I only have 1 page this works for me.

Once I had the automation setup I started to look at other options using NPM and that led me to the [puppeteer-pdf](https://www.npmjs.com/package/puppeteer-pdf) package which gave me better customization of headless Chrome that I wanted. The downside has been that after making some extensive changes in my print CSS the output looks perfect when exported from the Chrome print screen to PDF but it doesn't match when generated using puppeteer-pdf. I'm not sure why but I'll figure it out at some point. I may need to just use Puppeteer directly, maybe there's a setting that needs to be used that I'm missing.
