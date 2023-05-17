const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'avinashaman9977@', {
  dialect: 'mysql',
  host: 'localhost'
});


module.exports = sequelize;
