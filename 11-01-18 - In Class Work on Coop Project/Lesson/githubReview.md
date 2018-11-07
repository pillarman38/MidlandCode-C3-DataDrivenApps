# GitHub Resources

## Best Practices
* Never push to master if you can avoid it (which you almost alway can)
* Keep things together in the branch you're working on and ONLY change code for those things. If you're on the branch `refactoring-signup-template` don't start changing the login template.
* Commit often and on finished products. This doesn't just mean a finished branch. If you finished a function in a component you're building and it's done, commit it!
* More resources: [Github Best Practices](https://resources.github.com/videos/github-best-practices/)

## Communication
* Make sure you're not doing the same thing as a teammate on the same branch (or different branches that should really be the same branch)
* if you're looking at changing something outside of your branch see if anyone is working on that before moving branches. This is less of an issue in the real world as you'll have more clear expectations set out for you.

## Github WorkFlow
* If you're ever lost, remember the order of things for github
    1. Write the code
    2. Add the code as staged to be committed `git add (file names or -A for everything but make sure you REALLY want everything to be added)`
    3. Commit with a present tense clear message such as `git commit -m "Adds signup service"` 
    4. Push it to the remote origin with `git push`. You might need to pull things form the origin if you're behind (you'll get a message to do so usually).
