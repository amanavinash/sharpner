const Sequelize = require('Sequelize');
const Sequelize = new Sequelize ( 'node-complete','root',  'avinashaman9977',{
    dialect: 'mysql' ,
    host: 'localhost'

} );



module.exports = Sequelize;