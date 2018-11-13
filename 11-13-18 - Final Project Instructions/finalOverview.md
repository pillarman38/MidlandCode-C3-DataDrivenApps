# Final Project
## We're going to be building a scheduling app! It's going to be a lot of fun, trust me!

Below are the very basic requirements, in the [Final Frontend](./Front-End) and [Final Backend](./Back-End)

### Basic Requirements:
* The whole app should be in a single project folder and a single github repository.
* Git should be used for proper branches and source control.
* Set up all of your connection information in a config file and don't push that to github. 
* Don't push any unnecessary files to github either.
* Utilize types and interfaces and ES6 in typescript for the front end. The backend can be either ES6 or ES5 as you prefer.
* MySQL OR PostGres should be utilized as the database.
* Properly comment your code so that anyone who walked into the job would know what you were trying to do.
* Utilize a logical file structure to help keep everything separate.
* Setup the `package.json` `scripts` so that you have `npm start` for production start and any other scripts for building or testing in dev.

### General Overview
* This site will allow a user to create one or more calendars (work, home, hobby, etc.) and add events to them.
* The calendars should be displayed separately OR together based off what the user selects (Work and Home as two distinct calendars and then with a button click, they should be merged together).
* The main site should be divided into three (at minimum) major sections:
    * Login / Signup Page - Obvious Functionality
    * About / Home Page - This should be accessible to people whether they are logged in or not
    * Calendar Page - The Biggest functionality of the site. This will be where they can view all their calendar events by calendar or all together.
* The back-end should have at LEAST the following functionality:
    * Deliver the SPA from `/` and redirect to that route from any non declared route.
    * CRUD Routes for calendar events
    * CRUD Routes for users
    * Login route (bonus goal for utilizing an authentication protocol)
    * Separate files for SQL queries and routes.


### Tools
* [Angular Docs](https://angular.io/api)
* [Javascript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Express Docs](http://expressjs.com/en/4x/api.html)
* Slack - Don't hesitate to reach out to each other or Brock, Sebastian, or I for any issues you run into.

### Suggested Plan of Attack
* This is not a required method of doing this and I encourage you to do what you think would work best, but I would suggest doing the following
1. Decide overall structure of database and project
2. Scaffold out all files (Front and back end). These can be changed later but you can at least start with a good setup.
3. Setup database, tables, and connection.
4. Setup routes for CRUD and test via `postman`, you can add authentication later but this would get you going.
5. Set up front end starting in the most logical order.
6. Refactor back-end based off service requirements / issues/
7. Refactor front-end.
8. Add any missing functionality.
9. Deploy

