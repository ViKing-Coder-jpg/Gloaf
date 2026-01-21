const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {options} = require('../constants.js')
dotenv.config();





const jwtsign = async (req, res,time,option) => {
  try {
    console.log("inside jwt signing");
    const token = await jwt.sign(
      { Email: req.body.Email, type: req.body.type },
      option=='a'?process.env.JWT_SECRET_ACCESS:process.env.JWT_SECRET_REFRESH,
      { expiresIn: time }
    );
    console.log('token was made')
    return token;
  } catch (err) {
    console.log("error in jwt sign", err);
  }
};


const jwtVerifyAccess = async (req, res, next) => {
  try {
    const cookie = req.cookies.accessToken;
    if (!cookie) {
      return res.status(400).send("cookie not found");
    }
    const token = cookie.split(" ")[1];
    if (!token) {
      return res.status(400).send("token not found");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET_ACCESS);
    if (!verified) {
      await jwtVerifyRefresh(req,res,next)
      const acessToken = await jwtsign(req, res, "1d", "a");
      res.cookie("acessToken", acessToken, options).json({message:'accessToken was made successfully!'})
    }
    next();
  } catch (err) {
    console.log("Error is jwt acess verify", err);
  }
};
const jwtVerifyRefresh = async (req, res, next) => {
  try {
    const cookie = req.cookies.refreshToken;
    if (!cookie) {
      return res.status(400).send("cookie not found");
    }
    const token = cookie.split(" ")[1];
    if (!token) {
      return res.status(400).send("token not found");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET_REFRESH);
    if (!verified) {
      res.status(401).json({ message: "User unauthorized , Login again" }).clearCookie('refreshToken').clearCookie('accessToken').clearCookie('accountType').redirect(`${process.env.FRONTEND_URL}/login`);
    }
    next();
  } catch (err) {
    console.log("Error is jwt refresh verify", err);
  }
};
module.exports = {
  jwtsign,
  jwtVerifyAccess,
  jwtVerifyRefresh
};
