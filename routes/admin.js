
const path=require('path') ;
const express=require('express');
const router =express.Router();
const controller = require('../controller/concutus') ;

router.get('/add-product',(req,res,next)=>{ 
res.sendFile(path.join(__dirname, '../','views','add-product.html'));
}) ;
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}) ;
router.get('/concutus',controller.concuctus) ;
router.get('/concutus',controller.sucess) ;

module.exports = router ;












































// const Product=require('../models/product') ;
// const path=require('path') ;
// const express=require('express');
// const router =express.Router();
// router.get('/add-product',(req,res,next)=>{ 
// res.sendFile(path.join(__dirname, '../','views','add-product.html'));
// }) ;
// router.post('/add-product',(req,res,next)=>{
//     console.log(req.body);
    
// const product=new Product(req.body.title);
// product.save();
// res.redirect('/');
// }) ;











module.exports = router ;


































