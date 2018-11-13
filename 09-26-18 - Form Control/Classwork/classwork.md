## Now to put it into practice!

1. Implement template driven validation for your pizza ordering app on the selections page.
2. Implement validation via reactive form design for your payment page. 
3. Add an Authguard for the payment route and separate the sub components into their own parent components and routes.

``` typescript
    //Function to be called with no input
      validateReason(control: AbstractControl){
      let reasons: string[] = ['suggestion', 'complaint', 'comment'];
      let valid = !reasons.includes(control.value);
      return valid ? {'invalidReason': {value: control.value}} : null;
    }
```

``` typescript
    //Reusable function with argument That returns a factory
    validateSelections(options: string[]) : ValidatorFn
    {
        return (control: AbstractControl) : {[key: string]: Object} | null {
            let valid = !options.include(control.value);
            return valid ? {'invalidReason': {value: control.value}} : null;
        }
    }
```