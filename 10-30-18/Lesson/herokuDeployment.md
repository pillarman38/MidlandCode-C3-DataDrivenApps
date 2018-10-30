## Heroku is Much Easier than AWS BUT it's more restrictive!

## Deploying from a git repo:
[Simple Step By Step Instructions](https://devcenter.heroku.com/articles/git)

### Notes
* You will need to add the angular-cli to the dependencies if it's currently in dev-dependencies.
* You will also need to add a `postInstall` script to your package.json to allow for an `ng build --prod` command before it tries to start the server
* Setting up ENV variables is also a requirement if your repo is public.