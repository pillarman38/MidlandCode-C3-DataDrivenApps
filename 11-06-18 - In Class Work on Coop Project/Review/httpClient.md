## If you want to post to a server you will need to user the HttpClient
* You will want to set it up to utilize observables. if you're doing it correctly you'll want to send all errors and/or responses using the same pattern serverside
* You can throw errors in your server if something happens and send errors accordingly.

## Take the Below Example: 
``` typescript
        getTodos(){
            return this.http.get(ourUrl)
            .pipe(
                retry(4),
                map(res => res.success),
                catchError(err => error(err))
            )
        }
```
### The above does the following:
1. Gets something from `ourUrl`
2. Retries the get up to 4 times before erroring out
3. Pulls the success key off the response to be handled in the subscriber
4. Throws an error if an error occured (this could be done with either an actual error or an error that was sent from serverside)

## With the above you could subscribe in the component with
``` typescript
    getTodos(){
        this.todoService.getTodos().subscribe(
            todos => this.todos = todos,
            error => this.error = error
        )
    }
```

This is a simple example and there are many things you can change and in fact would need to change based off the expectations of the program.