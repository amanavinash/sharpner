
const express = require('express');

const usercontroller = require('../controllers/usercontroller');

const router = express.Router();

router.post('/add-user', usercontroller.addUser) ;

router.get('/get-user',usercontroller.getUser);
  
router.delete('/delete-user/:id',usercontroller.deleteUser);
 module.exports=router;








