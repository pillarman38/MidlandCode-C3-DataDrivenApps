### Putting it into practice!
Let's take what we've learned so far and build a simple three page app with animations

## The Pages
1. An About page: This can be 100% filler as it doesn't need to have anything super crazy. You just need to be able to see the information on it to verify your animations are working
2. A Home Page: Same as the about page. This should however be your default page if someone enters an odd route like say `/thisisntareallink`
3. A todo page: This page can consist of two sub components or be in a single top component but should at the very least have: 
    1. A form with validation to add todos that contains:
        * Name of the todo  - Required
        * Category for the todo - Cannot be or contain the string `Nothing`
        * Submit button that saves the todo if valid. When it is saved you should add a `completed` field to the todo. Might not be a bad idea to add an `id` as well, but that is your call.
    2. A list of your todos. This could be in tabular form or any form you prefer, but each todo should have a checkbox that can be clicked. If the todo is completed it should be checked and vice versa. When a todo is checked to unchecked as completed, the div containing that todo should animate to or from green (completed)
4. Your app should have transition animations between each of the routes you have, with a different animation for each possible transition. They can be anything you want but there should be three unique animations that are clear if they are working or not: 
    1. About <=> Home
    2. Todos <=> Home
    3. About <=> Todos
