## Below is an example of what a signup route could look like.

Bear in mind that this is only a very basic example and is missing quite a few things in functionality for a production environment:

``` javascript
router.post('/signup', (req, res)=>{
    pool.query('SELECT * from users where username = ? ', req.body.username, (err, results, field)=>{
        if(err) return res.send('Err', err)
        if(results.length > 0) return res.send('Username already taken')
        var hash = bcrypt.hashSync(req.body.password, 10);
        pool.query('INSERT INTO users SET ?', {username: req.body.username, password: hash}, (err)=>{
            if(err) return res.send('Err', err);
            res.send('Success!');
        })
    })
})
```
The above is missing the following:
* Nothing is stopping a password that is too short or too long.
* The query should be separated out into its own function.
* Some of the code can be cleaned up