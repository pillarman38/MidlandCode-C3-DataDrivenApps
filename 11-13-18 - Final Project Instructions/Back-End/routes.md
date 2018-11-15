# Routes
## Requirements

* All routes for the API should be located under the `/api/` route. For example if you wanted to get all `users` it would be `/api/users/`
* All routes should be declared in separate files and loaded into the main server.js file.
* The way you name your routes should be semantically clear to any user if you were to make your API public in the future. I.e. `/api/users/all` vs `/api/allusers/`
* The following routes are REQUIRED: 
    * User Routes
        * Create (Signup)
        * Read All Users (Get All Users) - Should be stripped of secure information before being returned
        * Read User by ID (Get User by an ID) - Should be stripped of secure information before being returned
        * Update (Change Password)
        * Delete (Delete Account)
    * Calendar Routes
        * Create (Create New Calendar like work, or home)
        * Read All (Find all calendars by logged in user)
        * Read id (Find a calendar by id or name)
        * Update (Rename Calendar)
        * Delete Calendar (Remove a calendar. Can only be done if no items are on the calendar)
    * Event Routes
        * Create (Add an event to an existing calendar)
        * Read All Events By User(Get all Events by user)
        * Read All Events By Calendar(Get all Events by calendar)
        * Update Event (Change time, date, name of event)
        * Delete Event (Remove Event)
* All of the above routes should handle any SQL errors, server errors, or bad requests
* There should be a proper status code for each route depending on the outcome of the request and a response should be sent to the front end regardless of whether the request was good or bad.
        