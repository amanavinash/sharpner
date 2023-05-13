const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
function isstringvalid(string) {
  if(string== undefined||string.length===0 ){
return true
  }else
return false
}  
const singup = async(req, res, next) => {
  try{
    const name=req.body.name;
    const email=req.body.email;
    const passward = req.body.passward;

    if(isstringvalid(name)||isstringvalid(email)||isstringvalid(passward) )
    {
 return res.status(400).json({err:"something is missing"});
}

const saltround=10;
bcrypt.hash(passward,saltround,async(err,hash)=>{
console.log(err);
await User.create({name,email,passward:hash});
res.status(201).json({message: 'successfully created new user'}) ;  
}) }catch(err){
      console.log(err) ;
    res.status(500).json(err)
    
}
 }
 const genrateAccesToken = (id, name, ispremiumuser) => {
  return jwt.sign({ userId : id, name: name, ispremiumuser } ,'aman');
}

const login =  async(req,res, next)=>{
const email=req.body.email;
const passward = req.body.passward;
if(isstringvalid(email)||isstringvalid(passward) )
{
return res.status(400).json({message:"something is missing",success:false});
 }

const user=await User.findAll({where: {email}})

try{
if(user.length>0){
  bcrypt.compare(passward, user[0].passward, function(err, result) {
    if (err){
      res.status(201).json({success:true,message: 'Something went wrong'}) ;
    }
    if (result===true){
      return res.status(200).json({success: true, message: "User logged in successfully", token: genrateAccesToken(user[0].id, user[0].name, user[0].ispremiumuser)}) ;
       }
else{
     return res.status(404).json({success:false,message: 'Passward is incorrect'}) ;
    } 
    
  })

}else {
     return res.status(400).json({success:false,message: 'User does not exist'}) ;
    }

 }catch{
  res.status(500).json({message:err,success:false,})
 }

  }

module.exports={

singup,
login ,
genrateAccesToken
}























