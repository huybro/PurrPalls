# Milestone 2
We have built a front-end that include login/signup page, index page for interacting with different profiles, profile page for editing personal information, and to-be designed message page.

## How to run
You will need to
 ```sh
  npm install 
  ```
and then run

 ```sh
  npm run milestone-02
  ```
which will then open http server on localhost:3000. 
The index page with mock data at http://localhost:3000/pages/  
The profile page with mock data at http://localhost:3000/pages/profile.html
The login page at http://localhost:3000/pages/login.html
The sign-up page at http://localhost:3000/pages/signup.html

# Milestone 3

We have make this application with authentication(both login and register), like feature to match pet, edit personal information all supported by CRUD operations with Express server and PouchDB.

## Set up
 ```sh
  npm install 
  ```
and then run

 ```sh
  npm start
  ```
## Back-end implementation

- We have 4 main page(index, login, signup, settings), which correspond to 4 different get route /index , /login , /signup, /settings
- For /index we only use GET method to pull data from the database back to client to display available profiles
- For /login we have both GET, POST method to retrive the html page and post user's email, password to server for authentication
- For /signup we have both GET, POST method to retrieve the html page and post new user information to server to register
- For /settings we have GET, PUT method to edit personal data
- For /deleteProfile we have DELETE method to delete the profile from the app

## Demo

We have provided with prop account for you to test the application 
email: ktle@umass.edu
password: ilovecs326
