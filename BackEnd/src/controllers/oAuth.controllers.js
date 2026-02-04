const { jwtsign, jwtVerifyAccess } = require("../middlewares/oauth.js");
const passport = require("passport");
const dotenv = require("dotenv");
const {options} = require('../constants.js')
require("../middlewares/googleOAuth.js");

dotenv.config();

const signupGoogle = () => {
  return passport.authenticate("google", { scope: ["email", "profile"] })
};
const signupGoogleCallback = async(req,res,next) => {
      const refreshToken = await jwtsign(req, res, "5d", "r");
      const accessToken = await jwtsign(req, res, "1d", "a");
      res
        .status(201)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accountType", "Customer", options)
        .redirect(`http://localhost:5173/customer/home?accessToken=${accessToken}`);
}

module.exports = {
  signupGoogle,
  signupGoogleCallback,
};
