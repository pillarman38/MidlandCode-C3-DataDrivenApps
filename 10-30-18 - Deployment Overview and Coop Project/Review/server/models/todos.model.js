let pool = require('../config/connections')

let todoFunctions = {
    getByUserId: (userId, callback)=>{
        pool.query('SELECT * from todos where userID = ? ', userId, (err, results)=>{
            callback(err, results)
        })
    },

    getById: (id, callback)=>{
        pool.query('SELECT * from todos where id = ? ', id, (err, results)=>{
            callback(err, results)
        })
    },

    getAll: (callback)=>{
        pool.query('SELECT * from todos', (err, results)=>{
            callback(err, results)
        })
    },

    deleteTodo: (id)=>{
        pool.query('DELETE * from todos where id = ?', id, (err, results)=>{
            callback(err, results)
        })
    },

    updateTodo: (id, update)=>{
        pool.query('UPDATE todos SET ? where id = ?', [update, id], (err, results)=>{
            callback(err, results)
        })
    },

    addTodo: (todo, callback)=>{
        pool.query('INSERT INTO todos SET ?', todo, (err, results)=>{
            callback(err, results)
        })
    }

}

module.exports = todoFunctions;