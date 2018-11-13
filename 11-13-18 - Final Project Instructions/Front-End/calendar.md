# Calendar Page
## This will be where the bulk of the work occurs and honestly is the most complex by a factor of 3+ compared to the other components.

## Requirements
* The page itself can be displayed however you prefer but should be separated out into 2 distinct sections. These can be sub-components OR all on one template, whichever makes sense. They are as follows: 
    * Calendar
        * The Calendar itself can be displayed however you prefer. This can be in a standard calendar format or as a simple list of events in chronological order. 
        * There should be an easy way to add / delete a new calendar (for work, home, etc)
        * There should be a way to show only specific calendars, show all of them as individual calendars, or show all of them merged into one.
        * In the calendar, you should be able to click on an event (or click a button next to the event as you prefer) to edit or delete the event in question
    * Adding Events
        * When you add events the following is required
            * The calendar it is attached to
            * The name of the event
            * The date / time of the event
        * All fields are required and should utilize some sort of form control
        * As with the other forms (login/signup) no data should be sent if the form is invalid.
        * The form should also be invalid if the calendar they try to attach an event to doesn't exist for that user. 
        * Whenever an event is added, the calendar(s) should be reloaded
* Utilize services for this component and have appropriate functions for all needed funcitonality.