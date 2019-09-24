# MyReads Project
MyReads app is a small bookshelf app where you can search, select and categorise books based on what you want to read, have read or books you are currently reading.

## Code base
The application was created with **create-react-app** and requires only few steps to get started.  

_First step_ is to open your app in terminal, then execute `npm install` command. This command will install all the dependencies necessary for this project to run smoothly.  

_Secondly_, execute `npm start` command to run the app in your localhost.

Besides default packages from create-react-app, the only additional packages installed are,

1. react-router-dom
2. prop-types

## App features
Once you start MyReads app, you should be able to see three book shelves titled,  
1. Currently reading
2. Want to read
3. Have read

![myReads app main page](./screens/screen1.png? "myReads app main page")  

A sample collection of books should already be setup for you in each of the shelves.  

You can click the **+** button located in bottom right corner of the page to go to the search page where you can search books using specific search terms like 'Android', 'Art', 'Artificial Intelligence', etc.  

![myReads app main page](./screens/screen2.png? "myReads app main page")  

For more search terms, please see **SEARCH_TERMS.md**.  

You can add books to the shelf straight form the search page through book control with _down chevron icon_.  

![myReads search page](./screens/screen3.png? "myReads app main page") 

The books that are already on shelf will have their respective shelf tag selected in control menu both in **main** and **search** page.



