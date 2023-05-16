const Expense = require('../models/expense');
const Expense = require('../models/expense');
exports.addUser = async(req, res, next) => {
try{
const amount=req.body.amount;
const description=req.body.description;
const category = req.body.category;
const Users=await Expense.create({amount:amount,description:description,category:category,userId:req.user.id},{transaction: t}) 
.then((User) => {
    const totalExpenses = Number(req.user.totalExpenses) + Number(amount);
    User.update(
      { totalExpenses: totalExpenses },
      { where: { id: req.user.id },
      transaction: t
    
    }
    );
  });
  res.status(200).json({ newUserDetails: Users });
} catch (error) {
  console.log("error:", error);
  res.status(500).json({success: false, error: error });
}
};


exports.getUser=  async(req,res, next)=>{
// const  Users=await Expense.findAll({ where : { userId: req.user.id}});
const  Users=await Expense.findAll();
res.status(200).json({allUsers:Users}) 
 } ;

 exports.deleteExpense = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const id = req.params.id;
    const user = await Expense.findOne({ where: { id: id } });
    const response = await Expense.destroy({
      where: { id: id },
      transaction: t,
    });

    const totalExpenses = Number(req.user.totalExpenses) - Number(user.amount);
    await req.user.update({ totalExpenses: totalExpenses }, { transaction: t });
    if (response === 0) {
      return res.status(401).json({
        message: "Expense does not Belongs to User",
        success: false,
      });
    }
    await t.commit();
    res
      .status(200)
      .json({ message: response, success: true, totalExpense: totalExpenses });
  } catch (error) {
    console.log("error:", error);
  }
}
