---
title: Moving to a Web Client 
subTitle: Cracking the Monolith
category: "Musings"
cover: thomas-millot-1114406-unsplash.jpg
---
![Unsplash](thomas-millot-1114406-unsplash.jpg)
I work on a application that is pretty monolithic in nature. From time to time a coworker and I discuss where it should be in 5 years. This post is part of a series I call Cracking the Monolith with my musings on these conversations.

This application has a thick client that's based on WinForms a very dated technology. Now our service layer can be fairly easily ported to a RESTful API which means we have a realistic possibility of building the future client as a web interface that can be used in any browser. 

We could start with some of the basic but core functionality such as CRM. This could be built using whatever the latest web framework is - Angular, React, or Vue. Then we could use the Strangler pattern to slowly reduce usage of the CRM features in the WinForm app for the new web based version.

Following this process we could easily transform the application from dated to cutting edge while allowing the business to keep running without impact to its core application.
