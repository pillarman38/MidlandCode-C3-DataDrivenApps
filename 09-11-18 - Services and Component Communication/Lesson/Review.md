## Review for Simple Routing in 4 basic steps
1. Create and define the routes in a app.routes.ts file (or other appropriate name).
2. Import the RouterModule and the routes from the .ts file into the appropriate module file (for basic examples it would be app.module.ts)
3. Place `RouterModule.forRoot(name of import from routes file)` in your module imports section.
4. Put a `<router-outlet></router-outlet>` tag in your top level app template.

## Remember you can use parameters in your routes as well
1. Declare them as part of the route prepended with `:`such as `users/:id`
2. In the component .ts file that corresponds to the route, make sure you're getting the params from the route via using the route snapshot (for simple params)

## Setting up route links
1. Use any tag you prefer. Usually it is a button or an anchor tag however.
2. set the RouterLink in the tag you're using. this can be done as: `[routerLink]="['/routeYoureUsing']"` or `routerLink="/routeYoureUsing"`
3. Set any params or fragments you want to use (fragments are using ids to go directly to a section of the page) `[queryParams]="{key: value}" fragment="fragmentName"`
4. If you want the link to show differently if the route is active you can use either of the following:
    1. `routerLinkActive="class1 class2"`
    2. `[routerLinkActive]="['class1', 'class2']"`
    3. You can also use options such as `[routerLinkActiveOptions]="{exact:true}` Exact must match the link verbatim. It's important to keep this mind if you have sublinks in a component (i.e. a componenet at /user and then the user component has routes for /user/config or /user/friends)
