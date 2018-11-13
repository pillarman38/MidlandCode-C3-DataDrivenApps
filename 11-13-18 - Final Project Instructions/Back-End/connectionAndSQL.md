# Backend Connection and SQL
## Requirements
* All connection passwords/etc should be kept in a file in ignored by git and then be saved into `process.ENV` variables
* All connection information in files on github should ONLY reference `process.ENV` variables to keep that infromation secure.
* When the server starts make sure there is a console log stating whether or not the sql connection was made.
* Set up production and a dev database connection information (it can be the same, but setup two different variables) and use the appropriate one based off whether or not the environment is prod or dev.
* Connect using pooling and access the pool for any new queries.
* All SQL queries for routes should be in files separate from the routes files. These queries should take argument(s) and a callback function that will fire when the query is complete.
* Users' names and emails should be unique
* Users' passwords should be stored as non-plain-text
* If connection fails at some point during the lifecycle of the app, a new connection should be attempted until 4 failures in a row. Each failure should be logged to the console.