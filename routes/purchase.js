const express = require('express');
const purchaseController =  require('../controllers/purchase');
const authenticatemiddleware = require('../middleweare/auth');
const router = express.Router();
router.get('/premiummembership',authenticatemiddleware.authunticate ,purchaseController.purchasepremium);
router.post('/updatetransactionstatus', authenticatemiddleware.authunticate, purchaseController.updateTransactionStatus)
module.exports = router;











