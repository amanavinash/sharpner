
const express = require('express');
const sequelize=require('./util/database') ;
const app = express();
const userRoutes = require('./routes/user');
app.use('/user',userRoutes);
sequelize
  .sync()
  .then(result => {
   app.listen(3000);
  })
 .catch(err => console.log(err));

