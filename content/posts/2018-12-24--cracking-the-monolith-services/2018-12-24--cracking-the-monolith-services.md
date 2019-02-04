---
title: How should we break down the Services? 
subTitle: Cracking the Monolith
category: "Musings"
cover: pierre-chatel-innocenti-717231-unsplash.jpg
---
![Unsplash](pierre-chatel-innocenti-717231-unsplash.jpg)
I work on an application that is pretty monolithic in nature. From time to time a coworker and I discuss where it should be in 5 years. This post is part of a series I call Cracking the Monolith with my musings on these conversations.

As of late I've been thinking about what the best way would be to break it into more granular services. Currently it's divided into 2 services - one for handling the financials and the second for everything else. It's this second service that I think needs to be broken down more but how far down that rabbit hole do we go? I know that microservices are de rigueur right now but that might too much for this application. There are a few obvious choices that we could pull out into individual services - document generation and deferred message processing.

Document generation has always seemed like an ideal candidate for its own service. It is pretty isolated from the core application as it is but it requires the most processing power and memory of all the work that this application does. Ideally this service would be loaded into a swarm of containers but that's for another post.

Deferred message processing (DMP) seems like it could be pulled out into its own service as well. DMP is really just a custom scheduler that we built for our needs. Where I think this could get tricky is the serialization of the messages as changes are made to related classes. 

The Voucher Import process could also be put into it's own service. This area is used by one specific team and the objects that it uses are well designed and can be decoupled. This process pulls down it's data from one of our Web APIs at regular intervals and then processes that data. Once the processing has completed if some of the data is not valid or fails any rules then use intervention is required.


