## Angular Homework
The final angular homework over the weekend is fairly straight forward:
1. Finish anything you haven't finished with the previous in class work.
2. Style the whole app with animation(s). At the bare minimum have route animations.
3. Add the following directives to the app:
    * When displaying todos, change the color of the todos on mouse enter and mouse leave. 
    * Change the color of the completed field based off whether or not the todo is completed: Red for incomplete, Green for complete. The directive should take a boolean argument to determine which color to use. You'll use this in the todos section of the users page AND on the todos page. Yes this could be done with classes but practice the directive.
4. Create a redact email Pipe that does the following:
    * Takes some string email input and an optional character input
    * Replaces all but but the first two characters of the email and the last two of the domain with either `*` or the character provided. 
        * No character was provided and the email `mike@example.com` was provided. The email in the tempalte should show `mi**@*****le.com`
        * The character `F` was provided and the email `a.persons.email@email.com` was provided. The email in the template should show `a.FFFFFFFFFFFFF@FFFil.com`
        * Think about why this might not be a good idea in a production app. 
5. If you want more practice with something specific, let me know and I'll provide you with functionality to add.

## Other Homework
* Keep an eye on slack as depending on if I change my mind, I might have you all install something between now and the start of class on Tuesday. 
* Think of anything angular you need help with and reach out on Slack. Next week brings new topics and brand new things. 
* If you haven't done so, brush up on some of the changes between ES5 and ES6. Node will heavily use ES6 for our work. 