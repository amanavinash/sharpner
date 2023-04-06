const express = require('express');

const expensecontroller = require('../controllers/expensecontroller');
const userauthntication=require('../middleweare/auth');
const router = express.Router();

router.post('/add-user', expensecontroller.addUser) ;
  // router.get('/get-user',userauthntication.authunticate,expensecontroller.getUser);
  router.get('/get-user',userauthntication.authunticate,expensecontroller.getUser);
router.delete('/delete-user/:id',expensecontroller.deleteUser);

module.exports=router;








