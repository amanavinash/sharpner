const sgMail = require("@sendgrid/mail");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const User = require("../Model/User");
const ForgetPassword = require("../Model/Forgot");
require("dotenv").config();
exports.forgetPassword = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const userId = user.id;
      const id = uuid.v4();
      await ForgetPassword.create({
        id,
        isactive: true,
        userId: userId,
      }).catch((err) => {
        console.log(err);
        throw new Error(err);
      });
      sgMail.setApiKey(process.env.SG_MAIL);
      const msg = {
        to: email,
        from: process.env.FROM_EMAIL,
        subject: "Reset Password",
        text: "Forget Password",
        html: `<a href="http://localhost:4000/password/resetpassword/${id}">Reset password</a>`,
      };
      sgMail
        .send(msg)
        .then((response) => {
          return res.status(response[0].statusCode).json({
            message: "Link to reset password sent to your mail ",
            success: true,
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ message: err, success: false });
        });
    } else {
      throw new Error("User doesnt exist");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error, success: false });
  }
};
exports.resetPassword = async (req, res, next) => {
  try {
    const id = req.params.id;
    const forgotpasswordrequest = await ForgetPassword.findOne({
      where: { id: id },
    });
    if (forgotpasswordrequest) {
      await forgotpasswordrequest.update({ isactive: false })
      res.status(200).send(`<html>
            <script>  function formsubmitted(e){
                    e.preventDefault(); }
            </script>
            <form action="/password/updatepassword/${id}" method="get">
                <label for="newpassword">Enter</label>
                <input name="newpassword" type="password" required></input>
                <button>Reset password</button>
            </form>
        </html>`);
      res.end();
    } else {
      throw new Error("invalid uuid");
    }
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
};
exports.updatepassword = async (req, res, next) => {
  try {
    const { newpassword } = req.query;
    const resetpasswordid = req.params.id;
    const resetpasswordrequest = await ForgetPassword.findOne({
      where: { id: resetpasswordid },
    });
    const user = await User.findOne({
      where: { id: resetpasswordrequest.userId },
    });
    
    if (user) {
      const saltRounds = 10;
      bcrypt.hash(newpassword, saltRounds, function (err, hash) {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: err });
        }
        user
          .update({ password: hash })
          .then(() => {
            res
              .status(201)
              .json({ message: "Successfuly updated the new password" });
          })
          .catch((err) => {
            return res.status(500).json({ message: err });
          });
      });
    } else {
      return res.status(404).json({ error: "No user Exists", success: false });
    }
  } catch (error) {
    return res.status(403).json({ error, success: false });
  }
};
