const express = require("express");
const authenticatemiddleware=require('../middleweare/auth');

const  getUser  = require("../controllers/premiumFeature");
const router = express.Router();

router.get("/showLeaderBoard", authenticatemiddleware.authunticate,getUser.getUserLeaderBoard);

module.exports = router;


// const express = require('express');
// const purchaseController =  require('../controllers/purchase');
// const authenticatemiddleware = require('../middleweare/auth');
// const router = express.Router();
// router.get('/premiummembership',authenticatemiddleware.authunticate ,purchaseController.purchasepremium);
// router.post('/updatetransactionstatus', authenticatemiddleware.authunticate, purchaseController.updateTransactionStatus)
// module.exports = router;












