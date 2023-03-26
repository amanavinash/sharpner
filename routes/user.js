
const express = require('express');

const usercontroller = require('../controllers/usercontroller');

const router = express.Router();

router.post('/user/singup', usercontroller.addUser) ;

module.exports=router;








