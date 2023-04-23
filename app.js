const path = require('path');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(cors()) ;
app.set('view engine', 'ejs');
app.set('views', 'views');
const User = require('./models/User');
const Expense = require('./models/expense');
const Order=require('./models/order');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');
const purchaseRoutes=require('./routes/purchase');
//  const premiumFeatureRoutes = require('./routes/premiumFeature')
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user',userRoutes);
app.use('/expense',expenseRoutes);
 app.use('/purchase', purchaseRoutes)
//  app.use('/premium', premiumFeatureRoutes)
User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);
app.use(errorController.get404);
sequelize
  .sync()
  .then(result => {
 
   app.listen(3000);
  })
 .catch(err => console.log(err));
