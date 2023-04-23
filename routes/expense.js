const express = require('express');

const expensecontroller = require('../controllers/expensecontroller');
const userauthntication=require('../middleweare/auth');
const router = express.Router();
router.post('/add-user',userauthntication.authunticate, expensecontroller.addUser);

router.get('/get-user',userauthntication.authunticate, expensecontroller.getUser);

router.delete('/delete-user/:id',userauthntication.authunticate,expensecontroller.deleteUser);

module.exports=router;


