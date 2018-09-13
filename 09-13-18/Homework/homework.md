## Review and Back to Some Basics
1. Nuke the file structure you currently have and start from scratch. Don't use the code or folders you already have.
2. Build a brand new app that will have the following routes:
    1. Trivia Page
    2. Submit New questions page
    3. About Page
3. Set up all the routes and components
4. In the main `app.component.html` file have a top level menu to go to the above three routes.
5. Add a trivia service to get trivia questions as well as check if the answers were correct
6. The service should have the following functionality:
    1. Should return 4 random 
7. The Components:
    1. About Page - This should just be simple html with no major functionality. Make sure you have some information about your page
    2. Submit New Questions Page should do the following:
        1. Have a form that takes the following information:
            1. Question
            2. Correct Answer
            3. 3 incorrect answers
        2. When submitted, it should call the Service and add it to the questions list with an auto-incrementing id.
        3. Clear out the fields after successful submission.
    3. Trivia Page should have the following funcitonality: 
        1. Call the trivia service and get four random questions from the service.
        2. Pass the random questions to the question sub component should should: 
            1. Display the active question with the three possible options as buttons
            2. When a button is clicked it should pass the button clicked to the parent.
            3. The parent should then verify if the question was answered correctly via the service. And internally increment the score by 1 if it was correct.
        3. Results subcomponent: 
            1. After all 4 questions have been answered, the results component should display.
            2. This should show the user what questions they had correct, and which ones they didnt.
            3. For an added challenge, list not only the questions they got wrong, but also what the correct answer was AND what they answered
8. Set this up with proper styling (doesn't have to be fancy, but shouldn't look like a pile of puke).
9. For an even bigger challenge, have the answers display in a random order

## Example questions and array setup you can use:

``` javascript
    [
        {q: 'What is the capital of Nebraska?', wrongAnswers: [{a: 'Omaha'}, {a: 'Des Moines'}, {a: 'Kearney'}], correctAnswer: 'Lincoln'},
        {q: 'What is 2 + 2?', wrongAnswers: [{a: '5'}, {a: '64'}, {a: '22'}], correctAnswer: '4'},
        {q: 'What color is an eggplant?', wrongAnswers: [{a: 'Orange'}, {a: 'Green'}, {a: 'Blue'}], correctAnswer: 'Purple'},
        {q: 'Which is not a bear in North America?', wrongAnswers: [{a: 'Black Bear'}, {a: 'Grizzly Bear'}, {a: 'Spirit Bear'}], correctAnswer: 'Spectacled Bear'},
        {q: 'How do you say hello in Spanish?', wrongAnswers: [{a: 'Hello'}, {a: 'Halo'}, {a: 'Hela'}], correctAnswer: 'Hola'},
        {q: 'What year is this?', wrongAnswers: [{a: '2017'}, {a: '2019'}, {a: '2020'}], correctAnswer: '2018'},
        {q: 'Who is the Aztec god of war?', wrongAnswers: [{a: 'Quetzalcoatl'}, {a: 'Xipe Totec'}, {a: 'Tlaloc'}], correctAnswer: 'Huitzilopochtli'},
        {q: 'What is Batmans secret identity', wrongAnswers: [{a: 'Clark Kent'}, {a: 'Wally West'}, {a: 'John Stewart'}], correctAnswer: 'Bruce Wayne'},
        {q: 'Is Angular Easy?', wrongAnswers: [{a: 'Definitely'}, {a: '100% Guaranteed'}, {a: 'Absolutely'}], correctAnswer: 'Nope'}
    ]
```
