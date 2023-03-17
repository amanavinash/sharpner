const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Add = sequelize.define('add', {
  
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique:true
  },

  number: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = Add;


