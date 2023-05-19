
const User = require('../models/User');
const Expense = require('../models/expense');
const sequelize = require('../util/database');
const e = require('express');
exports.getUserLeaderBoard = async (req, res, next) => {
    try {
      const leaderBoardOfUsers = await User.findAll({
        order: [["totalExpenses", "DESC"]],
      });
      res.status(200).json(leaderBoardOfUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  






























































