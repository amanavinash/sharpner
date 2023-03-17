const express = require('express');

const expensecontroller = require('../controllers/expensecontroller');

const router = express.Router();

router.post('/add-user', expensecontroller.addUser) ;
router.get('/get-user',expensecontroller.getUser);
  
router.delete('/delete-user/:id',expensecontroller.deleteUser);

module.exports=router;








