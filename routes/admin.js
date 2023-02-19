
const path=require('path') ;
const express=require('express');
const router =express.Router();
router.get('/add-product',(req,res,next)=>{ 
res.sendFile(path.join(__dirname, '../','views','add-product.html'));
}) ;
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}) ;

router.get('/contactus',(req,res,next)=>{ 
    res.sendFile(path.join(__dirname, '../','views','learn.html'));
    }) ;

 router.get('/success' ,(req,res,next)=>{ 
        res.send("Form successfuly filled");
        }) ;











module.exports = router ;


























//res.sendFile(path.join(__dirname, '../','views','add-product.html'));

// const path=require('path') ;







