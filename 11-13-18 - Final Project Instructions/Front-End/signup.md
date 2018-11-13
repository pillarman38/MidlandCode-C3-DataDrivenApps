# Signup Page
## This will be the page that takes advantage of the create route 

## Requirements
* Only accessible if a user is NOT logged in, otherwise the user should be redirected to the calendar page.
* Must use some form of form validation. You can use Reactive or Template Driven as you see fit.
* Have error messages that display next to the input (without a visual 'jump' if the user enters information that doesn't match your criteria.
* Ensure that nothing is sent to the backend until all criteria for the form are met.
* If a user has something go wrong with the signup (username taken, 500 level error, etc.) make sure that an appropriate message is displayed so the user knows what is going on.
* Upon a successful sign up, the user should be told that they successfully signed up told to go to the login page. 
* The form should have a link to go to the `login` page near the bottom of it.
* This component should take advantage of a service for sending and receiving data from the backend when a signup attempt is made.
