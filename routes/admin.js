
const path=require('path') ;
const express=require('express');
const router =express.Router();
const concuctus=require('../controller/concutus')
 const success=require('../controller/sucess')
router.get('/add-product',(req,res,next)=>{ 
res.sendFile(path.join(__dirname, '../','views','add-product.html'));
}) ;
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}) ;

router.get('/contactus',concuctus.concuctuss),
router.post('/success',success.sucesss),

module.exports = router ;
exports.concuctus=concuctus;
exports.sucess=sucess;

























//res.sendFile(path.join(__dirname, '../','views','add-product.html'));

// const path=require('path') ;







