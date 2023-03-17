const Expense = require('../models/Expense');

exports.addUser = async(req, res, next) => {
  try{
      if(!req.body.amount){
throw new Error('amount is mandatory')
}

  const amount=req.body.amount;
  const description=req.body.description;
  const category = req.body.category;
  const Users=await Expense.create({amount:amount,description:description,category:category}) ;
  res.status(201).json({newUserDetails: Users}) ;
  }catch(err){
    console.log(err) ;
  res.status(500).json({
  error:err
  })
  } 
 };

exports.getUser=  async(req,res, next)=>{
const  Users=await Expense.findAll();
res.status(200).json({allUsers:Users}) 
 } ;

exports.deleteUser= async(req,res, next)=>{
  try{
  if (!req.params.id =='undefined'){
    console.log('Id is missing')
res.status(400).json({err:'id is missing'})
}
  const  uId = req.params.id ;
  await Expense.destroy({where:{id:uId}})
  res.status(200).json({uId:uId});

}catch(err){
    console.log(err);
    res.status(500).json(err)

  }
  
  }
  










