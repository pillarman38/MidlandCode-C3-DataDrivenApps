## Components - 
    * Every component need at the bare minimum: 
        1. A class declaring the component
        2. Some form of template (arguably not needed but without it, what's the point of making this a component as opposed to a service)
    * Use the `@Component` decorator to set styleUrls, Animations, etc.

## Services
* Standalone functionality that any component/ other services / directives can use. 
* Must be provided in a module and then injected into the constructor of the Component/etc. that is using it.

## Directives
* Declared with the @Directive decorator
* Can use Services / Etc. through dependency injection.
* Should be fairly basic code that changes an element through the selector:
    * attribute name
    * class name
    * element name
* Use `@HostListener(event) callbackFunction(){}` to bind event listeners for specific elements with that directive.
* Use `@HostBinding('attr you want to bind) private variableName : typeofVar` and then change the value of variableName and it will be changed in the template view.


## Routing

So up to this point we've got the following things that we can attach to a route: 
    * `path:` -  the url segment that you're declaring a route for. If you use `**` it will work for ALL routes not directly declared. if the path is followed by `/:somekey` it is a parameter that can be pulled off the route in the component
    * `component: SomeComponent` -  the actual component that will be loaded when the route gets loaded
    * `data:` -  Can be used for multiple things but currently we're using it for animations like: ``{animation: 'NameOfAnimation'}` -  where the value is the state you will use when that route is completed.
    * `redirectTo: 'someRoute'` - Allows you to redirect from a specific route, generally used with `path: '**'`
    * `resolve: {key: ResolverName}` - Tells the router that the resolver should fire and data should be stored on a key with the key name.
    * `canActivate: [ActivationGuard]` - Tells the route to fire the Activation Guard with the name supplied when the route tries to load


## AuthGuards
* Services that implement CanActivate, or one of the other options which include: 
    1. CanActivate - Stops from going to a route
    2. CanActivateChild - Stops access to child routes
    3. CanDeactivate - Stops from leaving a route
    4. Resolve - Can get data before a route is activated
    5. CanLoad - Similar to CanActivate but used for asynchronously loaded 
* Whatever you implement, you need that function inside the service. The function expects to return a boolean which would mean:
    * True - Can do the thing
    * False - Can't do the thing
* Can use injected dependencies in the constructor such as services and the like

## Component Communication

* Parent to child - Utilize one way binding and the @Input() decorator
    * If you have `<child-comp></child-comp>` in a parent template you can add `[childsVarName]="parentsVarName"` to the template to send it to the child
    * In the child add a `@Input() childsVarName: type` and now you can use it in the child. It will update automatically. 
* Child to Parent - Utilize one way binding (template to component) 
    * In the child, if you want to send a value, you need to declare an event emitter like: `@Output() varEvent new EventEmitter<typeOfValue>()`
    * When the child does a thing you want to emit the new value from, simply call `this.varEvent.emit(valueYouWantToEmit)`
    * Since we'll be handling an emitted event we can simply wait for it by binding a function that will take the value emitted: `<child-component (varEvent)="parentHandlerFunction($event)>`

* All Others - Services are the way to go with this. The key is that if you want to use values returned from services, you'll want to make sure that the service is injected as a dependency with the component `(private myService : MyService)` and then you can access any of the values there. Depending on how you have values update, it's important to keep in mind that a change in the service might not be registered as as change in the component.

## Form Control
* Template driven form control:
    * Uses the template and directives on the elements to check for validation. 
    * Almost always used in conjunction with ngModel. 
    * Custom validators need to be added as directives
* Reactive Forms (require the ReactiveFormsModule) in your app.module.ts
    * Use the controller for all of the validation and form control
    * Do not need ngModel as you can pull the values off the FormControl object
    * Custom validators can be created as standalone functions.

## Animations
* Declared as a standalone file or in the component.ts file.
* Uses functions to build animations based off selectors and states.
* Animations can be unidirectional `=>` or bidirectional `<=>` meaning the animation could be different depending on if it went from state `A->B` or state `B->A`
* Router animations require a function in the main component and a wrapper for the `<router-outlet></router-outlet>`
* Animations are declared on an element with `<some-element [@animation-name]="variableThatDeterminesState"></some-element>`


