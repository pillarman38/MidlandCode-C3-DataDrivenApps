## Let's practice a little bit with some directives!

You can use a pre-existing app for this or start with a new one:

* Generate two directives:
    1. MouseFocusDirective
        * This will be associated with anything that has a `[MouseFocus]` attribute
        * When the item is hovered over, change the background color to `blue`
        * When the mouse leaves the element, change it to `purple`
        * Any time the mouse is pressed down on the element have the background color be `yellow` until the mouse button is released.
    2. MissedBirthdayDirective
        * This directive should be attached to anything with a class of `.birthday`
        * It should take an input of a date in `MM/DD/YYYY` format.
        * Calculate the time between now and the date provided. 
        * If their birthday has already passed this year, add a `.missed` class which should add a red border
        * If they are older than you, add the `.is-older` class which should make the background black and the text color red.