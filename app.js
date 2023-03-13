const path = require('path');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
 const User = require('./models/User');

const app = express();
app.use(cors()) ;
app.set('view engine', 'ejs');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user',userRoutes);

app.use(errorController.get404);
sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
 .catch(err => console.log(err));
 

