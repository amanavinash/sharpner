const User = require('../models/User');

exports.addUser = async(req, res, next) => {
    try{
        if(!req.body.phonenumber){
  throw new Error('phone no is mandatory')
  }
  
    const name=req.body.name;
    const email=req.body.email;
    const phonenumber = req.body.phonenumber;
    console.log(name,email,phonenumber) ;
    const Users=await User.create({name:name,email:email,phonenumber:phonenumber}) ;
    res.status(201).json({newUserDetails: Users}) ;
    }catch(err){
      console.log(err) ;
    res.status(500).json({
    error:err
    })
    }
  };

exports.getUser=  async(req,res, next)=>{
  const  Users=await User.findAll();
  res.status(200).json({allUsers:Users}) 
   } ;
  
 exports.deleteUser= async(req,res, next)=>{
    try{
    if (!req.params.id =='undefined'){
      console.log('Id is missing')
  res.status(400).json({err:'id is missing'})
  }
    const  uId = req.params.id ;
    await User.destroy({where:{id:uId}})
    res.status(200).json({uId:uId});
  
  }catch(err){
      console.log(err);
      res.status(500).json(err)
  
    }
    
    }
    









