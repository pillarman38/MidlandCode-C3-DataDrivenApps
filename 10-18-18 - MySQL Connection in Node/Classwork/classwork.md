## So let's put everything together!
* Set up a server that will allow the following routes
    * `/users/` routes
        * `/signup` (POST) - Will take the information passed (should be username and password) and create a user in the table IF a user by that name doesn't already exist
        * `/login` (POST) - Takes the entered username and password and compares them to the information in the database
    * `/todos/`
        * `/add` (POST) - Verifies the information provided matches the format needed and if so, adds it to the database
        * `/:id` (GET) - Gets a single todo by id
        * `/all` (GET) - Returns ALL todos in the database
        * `/user/:userId` (GET) - Gets all todos by the specific user who is logged in.
* Have a top level route that serves a static `index.html` page with nothing fancy.
* Test your functionality through postman or the browser (for GETs). 
* Think about what might be missing from the above and try implementing it!