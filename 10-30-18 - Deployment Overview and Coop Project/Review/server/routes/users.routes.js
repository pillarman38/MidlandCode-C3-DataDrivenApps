var express = require('express');
var router = express.Router();
let bcrypt = require('bcrypt');
let user = require('../models/users.model');

router.post('/signup', (req, res)=>{
    user.getByUsername(req.body.username, (err, results)=>{
        if(err) return res.status(402).send({err: err})
        if(results.length > 0) return res.status(402).send({err: 'Username already taken'})
        var hash = bcrypt.hashSync(req.body.password, 10);
        let newUser =  {username: req.body.username, password: hash}
        user.addUser(newUser, (err, results)=>{
            if(err) return res.status(402).send({err: err});
           res.send({success: 'Success!'});
        })
    })
})

router.post('/login', (req, res)=>{
    user.getByUsername(req.body.username, (err, results)=>{
        if(err) return res.status(402).send({err:err})

        if(results.length == 0){
            bcrypt.compareSync('lainTextPassword', 'hashedValuedFromDB')
            return res.status(402).send({err: 'incorrect username / password'})
        }
        let matching = bcrypt.compareSync(req.body.password, results[0].password)
        if(matching) return res.send({success: results[0]});
        return res.status(402).send({err: "Incorrect username/password"})
    })
})

router.get('/all', async (req,res)=>{
  user.getAll((err, results)=>{
      if(err) return res.status(402).send({err:err});
      return res.send(results);
  })
})

router.get('/byid/:id', (req,res)=>{
   user.getById(req.params.id, (err, results)=>{
    if(err) return res.status(402).send({err:err});
    return res.send(results);
   })
})

module.exports = router;