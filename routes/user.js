
const express = require('express');

const usercontroller = require('../controllers/usercontroller');

const router = express.Router();

router.post('/singup', usercontroller.singup) ;
router.post('/login',usercontroller.login);



module.exports=router;








