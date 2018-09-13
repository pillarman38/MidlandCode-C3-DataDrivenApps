## So Let's talk about Sass, and no I don't mean what you see in most 90s family sitcoms

### General Overview
* Simply put: Sass is a different way to program CSS
* Utilizes a more clear file structure to help with coding styles
* Allows for easy separation of styling code for parent/child elements.

### Major Notes
* All style files will be in `.scss` files as opposed to `.css` files
* `.scss` files CANNOT be understood by the browers and MUST be compiled into css using some form of task runner such as webpack or gulp/grunt
* Allows for the creation of variables and `mixins` that allow you to easily reuse code

### Example

In raw css let's assume the following code: 
``` CSS
    .parent{
        background-color: black;
    }

    .parent .child1{
        color: orange;
    }

    .parent .child2{
        color: yellow;
    }

    .parent .child1, .parent .child2{
        background-color: black;
    }

    .parent:not(.anotherClass){
        text-transform: capitalize;
    }
```
in SASS it could be shown written as: 

``` CSS
    .parent{
        background-color: black;

        :not(.anotherClass){
            text-transform: capitalize;
        }
        .child1{
            color: orange;
        }

        .child2{
            color: yellow;
        }

        .child1, .child2{
            background-color: black;
        }
    }
```
As you can see above it uses a nesting structure to make it clearer what your code is doing without the use of a ton of extra declarations. Everything that styles the parent and its children is kept together in a nested format. 

Now obviously this is fairly straight forward, but lets say you have a ton more code that just what is being shown above. If you have a lot of style in each of the code blocks above you'll really start to see the benefit of SASS

### Declaring Variables in SASS

Let's say you 