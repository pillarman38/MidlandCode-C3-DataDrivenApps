# Login Page
## This will be the page that you are redirected to if you try to access a user only route.

## Requirements
* Only accessible if a user is NOT logged in, otherwise the user should be redirected to the calendar page.
* Must use some form of form validation. You can use Reactive or Template Driven as you see fit.
* Have error messages that display if the user tries to login without a username or password.
* Whatever criteria you require for your password / username length, ensure they login is never sent to the backend unless those criteria are met.
* If a user has something go wrong with the login (username/ password wrong, 500 level error, etc.) make sure that an appropriate message is displayed so the user knows what is going on.
* When the user logs in, automatically redirect them to the calendar section so they can view their schedules.
* The form should have a link to go to the `signup` page near the bottom of it.
* This component should take advantage of a service for logging in via json submission.
