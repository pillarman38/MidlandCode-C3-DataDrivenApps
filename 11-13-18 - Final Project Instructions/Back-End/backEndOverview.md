# The Backend of the Application

## Basic Requirements
Below are the things that are non-negotiable in the project. This doesn't mean that you can't add more things, these just have to be there in order for the application to be considered 'complete'
* All routes should be separated out into files by what the routes are for (eg. User routes should be in a separate file from calendar routes etc.)
* The Server should listen on port `3000` in production. You can have it listen to a different port in development, but make sure you know what environment is being loaded and therefore which port should be used.
* On startup of the server, connect to the database and if the connection fails, log the failure to the console and retry connection. 
* All connection information should be kept separate from the files on github and should be accessed in any file as `process.ENV` variables.
* Keep separate files out for any SQL queries and then just call those functions in your routes files.