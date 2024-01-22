# Are We Done Yet?

A Collaborative Platform for your friend group to create a watchlist and never run out of content again!

Link: https://are-we-done-yet.vercel.app/

## Overview

This web app was made using React.js, Firebase on the backend (database + user authentication) and WatchMode API to fetch content information. 

![image](https://github.com/MaruhanSelva/Are_We_Done_Yet/assets/75972624/cefa387a-5471-4425-acb7-4fe81be4dd45)

This application allows users to create accounts and log in to them (and authenticates them using Firebase). It also allows users to create and join different WatchLists (or groups) that are locked behind a username and password so that only those you trust can join your WatchList.

![image](https://github.com/MaruhanSelva/Are_We_Done_Yet/assets/75972624/ade3faf4-049c-4ebe-8e23-90ea7ad74353)

Once users have created/joined a WatchList, they can view the associated group page. This is where users can add more members (or look at the user/password for the group). They'll also be able to look up content and add it to the WatchList. This content search is powered by the WatchMode API. 

![image](https://github.com/MaruhanSelva/Are_We_Done_Yet/assets/75972624/aa6b8918-6f9f-4e51-aee6-e16276827f87)

![image](https://github.com/MaruhanSelva/Are_We_Done_Yet/assets/75972624/28f95791-106b-4e1b-b26a-12bed636777d)

Here they can indicate which shows they've watched and once everyone in the group has watched the piece of content (either a show or movie), you'll be able to better plan a discussion without accidentally spoiling things to each other.

## What I learned?
Through this project, I learned a lot of things related to making a full-stack application. Specifically:
* Using Firebase (and its associated products)
* Using a NoSQL database
* Using a REST API to do lookups (and rendering that content)
* Doing Fetch Requests
* Learning how to use Figma to design web interfaces
* Getting more comfortable with React.js

## Future Improvements
* Add the ability to plan discussions from within the group page (Google Calendar integration possibly)
* Be able to look up YouTube videos and add those to your WatchList
* Make it so that when everyone has finished content, an email will be sent to notify you!
