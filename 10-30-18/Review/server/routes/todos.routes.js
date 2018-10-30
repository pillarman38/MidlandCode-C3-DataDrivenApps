let express = require('express');
let router = express.Router();
let todos = require('../models/todos.model')

router.get('/all', (req, res)=>{
    todos.getAll((err, results)=>{
        if(err) return res.status(402).send({err: err})
        return res.send(results);
    })
});

router.get('/byId/:id', (req, res)=>{
    todos.getById(req.params.id, (err, results)=>{
        if (err) return res.status(402).send({err: err})
        return res.send(results)
    })
});

router.get('/byUser/:id', (req, res)=>{
    todos.getByUserId(req.params.id, (err, results)=>{
        if (err) return res.status(402).send({err: err})
        return res.send({success: results})
    })
});

router.post('/add', (req, res)=>{
    todos.addTodo(req.body, (err, results)=>{
        if (err) return res.status(402).send({err: err})
        return res.send({success: "Success"})
    })
})

router.post('/update/:id', (req, res)=>{
    todos.updateTodo(updates, (err, results)=>{
        if (err) return res.status(402).send({err: err})
        return res.send({success: "Success"})
    })
})

module.exports = router;