const http = require('http');
const express=require('express');
const bodyParser=require('body-parser') ;
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{  
    next();
}) ;
app.use('/add-product',(req,res,next)=>{
    res.send ('<form action="/product" method="POST"><input type="text" name="name"></input><input type="number" name="size"><button>Add product</button>');
}) ;
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}) ;
app.use('/',(req,res,next)=>{
    res.send ('<h1>hello</h1>');

}) ;
app.listen(3000);




