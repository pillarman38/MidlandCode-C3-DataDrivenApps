## Now to make everything work well together!

1. So let's take whatever is left to finish in the homework over the weekend and first off complete that.
2. Create Object interfaces for the Todo and the User objects with all required fields.
3. Let's implement an AuthGuard for the user/:id to ensure that the appropriate user is logged in. This will require two more steps:
    1. Implement a login function/ component with a login service. You can simply create dummy passwords or just whatever you see fit for this but the user should be stored on the service.
    2. Allow the user to navigate away form the page  and come back and STILL be logged in until they logout. (We've done this before but try not to copy your code)
    3. On the Auth guard for the Users/:id route, make sure that the user that is logged in has  the correct id corresponding to the route. Otherwise, send them back to either:
        * If a user IS logged in, send them to their appropriate route
        * If no user is logged in, send them to the login page.
4. Think about what other functionality you might want to add to make this a true prod app, let's discuss!
    