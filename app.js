
const express=require('express');
const bodyparser=require('body-parser');
const fs=require('fs');
const app= express();
app.use(bodyparser.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data="no chat exists"
        }
        res.send(
            `${data}<form onSubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
            <input id="message" type="text" name="message">
            <input id="username" type="hidden" name="username">
            <button type="submit">add</button>
            </form> `);
        
    })
});
app.post("/",(req,res)=>{
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:"a"},(err)=>{
        err ? console.log(err) :res.redirect('/')
    });
});
app.get('/login',(req,res)=>{
    res.send(`<form onSubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="POST">
    <input id="username" type="text" name="username" placeholder="username">
     <input id="message" type="hidden" name="message">
    <button type="submit">add</button>
    </form>`)
    
})
app.listen(4000);












































// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');
// const errorController = require('./controllers/error');
// const db = require('./util/database');
// const app = express();
// app.set('view engine', 'ejs');
// app.set('views', 'views');
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.post('/user', async(req, res) => {
//     try{
//         if(!req.body.number){

// throw new Error('phone no is mandatory')

//         }
//     const name=req.body.name;
//     const email=req.body.email;
//     const phonenumber=req.body.number;
//     const data=await User.create({name:name,email:email,phonenumber:phonenumber}) ;
//     res.status(201).json({newUserDetails: data}) ;
//     }catch(err){
//     res.status(500).json({
//     error:err
//     })

//     }
// });

// app.get('/user', async(req, res) => {
    
//     const users= await User.findAll();
//     res.status(200).json({allUsers:users}) ;
    
//     })






// app.delete('/user/:id', async (req, res) => {   
//  const uId = req.params.id  ;
// await User.destroy({where:  (id:uId)});
// res.sendStatus(200);
// })
    
        
    










// app.use(errorController.get404);

// app.listen(3000);
