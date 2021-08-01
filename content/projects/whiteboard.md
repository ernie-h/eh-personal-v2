+++
title = "Whiteboard: A Course Management Tool For Schools"
description = "Whiteboard is a course managing tool for student and faculty members, built with React, MEAN stack, and Springboot."
author = "Ernie Hao"
date = "2018-07-01"
categories = ["project"]
tags = ["React", "SpringBoot", "NodeJS", "MEAN"]
tags_weight = 2
cardImg="/img/projects/whiteboard/hero.webp"
showPost="true"
+++
{{< figure src="/img/projects/whiteboard/hero.webp" alt="whiteboard hero" title="Whiteboard's faculty view for creating courses and lesson outlines (July, 2019)" >}}

In the late Summer of 2018, I had decided to take a class that would forever change the way I viewed industry software. Up till then, I had a very academic view of computer science: knowledge of various algorithms and data structures, but not a solid footing on practical applicatons. Taking *Web Development*, a CS elective offered to undergrads and graduates, had opened my eyes to the amazing field and the modern day framewoks that were used by many individuals.

**Whiteboard** was a cumalative project that each student was required to build over a span of six weekly assignments. The general deliverables were highlighted in each assignment, but the design, bonus questions, and extra features students wanted to implement were differentiating and often times rewarding factors. I believe my implementation of Whiteboard had been exceptional and the learning process eye-opening, which is what I hope to show in this project reflection.

## THE BASICS
The first few lessons were crash courses on the fundamentals of web: HTML, CSS and Javascript. We learnt that HTML was the nested language of the web, and what browsers interpreted to create documents. CSS was the tool (not the language) that was used to style our elements. And finally Javascript, the brains of the operation which allowed us to make our static elements come to life and perform computational tasks under the hood. What followed after was a quick intro to jQuery (which I avoid like the plague now) and bootstrap, aiding in the quick start up of our project.

We soon learnt what CRUD (Create, Read, Update, Delete) meant and how those simple transformations were the backbone of API development and database queries. We set up a very basic API in Java using the Springboot library which interfaced nicely with our static front end. As complexity was added on to our microservices enabled school application, we layered on React and Redux to add extra interactivity to our frontend and handle the 'state' of the application more efficiently. A separate Angualr application was created and acted as admin management portal, where administrators had sudo rights to edit faculty and student data. We used heroku as our hosting service (though I would opt for Netlify now) and added a Java SQL database add on, and voila my first end-to-end web application was built.

## VIEWS
One interesting concept we came across was the idea of "views". How do we determine what different types of users see on the front-end and what kind of data they could access in the back-end? This idea, though straightforward, was super interesting (and challenging) to implement. First we had to determine what kind of users we had to support. For our school management application there would be a student, faculty, and regular user view. Students would have access to their class lists and each class would have one faculty member. The Class table (mySQL) would have a one-to-many relationship with 'Student' and a one-to-one relationship with 'Teacher'. Architecting these relationships opened my eyes to how much thought goes into determining use cases, data representations, and the handling of business logic that is vital to a product's success.

## REFLECTION
All in all this class was my first full-on exposure to how web architecture worked. Ultimately, theres a client, a server and a database, and when all those connect you have a web application.