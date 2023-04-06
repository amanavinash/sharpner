const jwt = require('jsonwebtoken');
const User = require('../models/User') ;
const authunticate=(req,res,next)=>{
try{
const token = req.header('Authorization');
const user = jwt.verify(token,'aman') ;
console.log('user >>>',user.userId)
User.findByPk(user.userId).then(user=>{
console.log(JSON.stringify(user)) ;
req.user=user ;
next();
}).catch(err=>{
throw new Error(err)})

}catch(err){

console.log(err) ;

return res.status(401).json({success:false});
}
}

module.exports ={
    authunticate
}











