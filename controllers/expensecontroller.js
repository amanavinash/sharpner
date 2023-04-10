const Expense = require('../models/expense');
exports.addUser = async(req, res, next) => {
  try{
      if(!req.body.amount){
throw new Error('amount is mandatory')
}
  

const amount=req.body.amount;
const description=req.body.description;
const category = req.body.category;
const Users=await Expense.create({amount:amount,description:description,category:category,userId:req.user.id}) ;
res.status(201).json({newUserDetails: Users}) ;
}catch(err){
  console.log(err) ;
res.status(500).json({
error:err
})
} 
};


exports.getUser=  async(req,res, next)=>{
const  Users=await Expense.findAll({ where : { userId: req.user.id}});
res.status(200).json({allUsers:Users}) 
 } ;

exports.deleteUser= async(req,res, next)=>{
  try{
  // if (!req.params.id =='undefined'){
  //   console.log('Id is missing')
// res.status(400).json({err:'id is missing'})
// }
   const  uId = req.params.id ;
//   await Expense.destroy({where:{id:uId}})
//   res.status(200).json({uId:uId});
Expense.destroy({where: { id:uId, userId: req.user.id }}).then((noofrows) => {
  if(noofrows === 0){
      return res.status(404).json({success: false, message: 'Expense doenst belong to the user'})
  }
  return res.status(200).json({ success: true, message: "Deleted Successfuly"})
}).catch(err => {
  console.log(err);
  return res.status(500).json({ success: true, message: "Failed"})
})



}catch(err){
    console.log(err);
    res.status(500).json(err)

  }
  
  }
  














