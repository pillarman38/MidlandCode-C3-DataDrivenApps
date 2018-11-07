var mysql = require('mysql')
   var pool = mysql.createPool({
       connectionLimit: 10,
       host: process.env.dbhost,
       user: process.env.dbuser,
       password: process.env.dbpassword,
       database: process.env.database,
       port: 3306
   })

   pool.getConnection((err, connection) => {
       if (err) {
           if (err.code === 'PROTOCOL_CONNECTION_LOST') {
               console.error('Database connection was closed.')
           }
           if (err.code === 'ER_CON_COUNT_ERROR') {
               console.error('Database has too many connections.')
           }
           if (err.code === 'ECONNREFUSED') {
             console.log(err);
               console.error('Database connection was refused.')
           }
           // res.send("Something went wrong");
       }

       if (connection) connection.release()
       return
   })

   module.exports = pool;