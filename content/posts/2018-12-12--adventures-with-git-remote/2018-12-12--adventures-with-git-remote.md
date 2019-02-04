---
title: Adventures with Git Remote
subTitle: Learning to get your code into GutHub
category: "DevOps"
cover: ales-prochazka-1309241-unsplash.jpg
---
![Unsplash](ales-prochazka-1309241-unsplash.jpg)

I was working on getting my repos into GitHub today and found myself having a hard time getting it to do what I wanted from VS Code. You see I don't use Git day to day at work. We are on TFVC (Team Foundation Version Control) which I'm really comfortable with so Git is a bit of a change for me. Now I generally have been able to create some mental bridges to get me going: Staging is like selecting which files to include or exclude. Commit is like checking in your code. 

But now things fall apart as I have my code committed but I want to get it into GitHub, how do I do this? This is where the concept of Remotes come in. With Git everything is a branch from the way I see it. This means a remote is like another branch but hosted somewhere else or remote. In my case I have my remote hosted at GitHub.

Now the problem I had and have not been able to totally solve was pushing to a remote from VS Code. At first I was getting errors when I would just chose the push option. I found out that I needed to run the git add remote command so I did that, but still no luck with the push just a mess of error messages.
```
git add remote origin
```
What I ended up doing was deleting and re-creating the repo on GitHub but making sure not to add a README, license or gitignore file. This then allowed me to push from VS Code all the changes I wanted. With that initial push to my remote I could add the README, license or gitignore files, as well as anything else I wanted.


