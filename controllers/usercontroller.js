
const User = require('../models/User')
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
    // if(name.length==0|| email==null||email.length==0||passward==null||passward.length==0)
    if(isstringvalid(name)||isstringvalid(email)||isstringvalid(passward) )
    {
 return res.status(400).json({err:"something is missing"});
}
    console.log(name,email,passward);
    await User.create({name:name,email:email,passward:passward});
    res.status(201).json({message: 'successfully created new user'}) ;
    
}catch(err){
      console.log(err) ;
    res.status(500).json(err)
    
}

}  
  


  // function genrateAccesTokenid(id){

  // }

const login =  async(req,res, next)=>{
    const email=req.body.email;
    const passward = req.body.passward;

    if(isstringvalid(email)||isstringvalid(passward) )
    {
      return res.status(400).json({message:"something is missing",success:false});
    }

const user=await User.findAll({where: {email}})
// .then(user=>{
  try{
if(user.length>0){

if (user[0].passward===passward){
  res.status(201).json({success:true,message: 'user logged in sucessfully'}) ;
}else{
 return res.status(404).json({success:false,message: 'Passward does not exist'}) ;
} 


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

}


















  

    

