require('./server/config/config');
   const express = require('express')
   const app = express()
   const port = 3000
   let userRoutes = require('./server/routes/users.routes.js')
   let todoRoutes = require('./server/routes/todos.routes.js')
   let bodyParser = require('body-parser').json();

   app.use(express.static(__dirname + '/dist'));

   app.use(bodyParser);




   app.use('/users', userRoutes)
   app.use('/todos', todoRoutes)
   //OR
   app.get('*', (req, res) => {
       res.sendFile('/dist/index.html', {root: __dirname + "/"});
   });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));