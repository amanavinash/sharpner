const User = require('../models/User');

exports.addUser = async(req, res, next) => {
    try{
        if(!req.body.phonenumber){
  throw new Error('phone no is mandatory')
  }
  
    const name=req.body.name;
    const email=req.body.email;
    const passward = req.body.passward;
    console.log(name,email,passward);
    const data=await User.create({name:name,email:email,passward:passward});
    res.status(201).json({newUserDetails: data}) ;
    }catch(err){
      console.log(err) ;
    res.status(500).json({
    error:err
    })
    }
  };
  

    

