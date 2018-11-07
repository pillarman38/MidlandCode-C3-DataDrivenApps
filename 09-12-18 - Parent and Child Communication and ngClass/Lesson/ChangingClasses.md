## I know what you're thinking and no I'm not talking about this class, you're stuck with me.

Let's say we want to use angular attributes to declare what classes we use and what we don't for an HTML element. This can be done in two different ways:
1. Simply put `ngClass="{{whatever you wish to edit classwise}}"` in the appropriate element. The expression between the `{{}}` can be a function or any sort of call to the component. 
2. If you have a specific class that will either be active or not on the element you can use the following syntax: `[class.nameoftheclassyouwant] = "expression to determine if the class should be on the element or not"`