### Time to connect to the SQL database
* After setting up the username and password as well as the tables and the database, connecting to the database is quite simple.
* To set up a single use connection you can simnply use the following code: 
    ``` javascript
        var mysql = require('mysql')
        var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'dbuser',
        password : 's3kreee7',
        database : 'my_db'
        });

        connection.connect()

        connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0].solution)
        })

        connection.end()
    ```
* But that might not be the best idea for us. We might want to use connection pooling for our purposes. Otherwise we're opening and closing a connection each time.
    ``` javascript
        var mysql = require('mysql');
        var pool  = mysql.createPool({
        connectionLimit : 10,
        host            : 'example.org',
        user            : 'bob',
        password        : 'secret',
        database        : 'my_db'
        });

        pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
        });
    ```
* Either way, once you have the connection set up it's as simple as writing the queries. The mysql package automatically protects against SQL injection when used properly. For more information let's check out: [The API Docs](https://github.com/mysqljs/mysql)!