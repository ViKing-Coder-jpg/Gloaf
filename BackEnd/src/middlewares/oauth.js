const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {options} = require('../constants.js')
dotenv.config();





const jwtsign = async (req, res,time,option) => {
  try {
    const email=req.body?req.body.Email:req.user.Email
    const type=req.body?req.body.type:req.user.type
    const token = await jwt.sign(
      { Email: email, type: type , createdAt:Date.now()},
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
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).send("token babu not found");
    }
    const extractedToken=token.split(" ")[1];
    if (!extractedToken) {
      return res.status(400).send("extracted token not found");
    }
    const verified = await jwt.verify(extractedToken, process.env.JWT_SECRET_ACCESS);
    if (!verified) {
      await jwtVerifyRefresh(req,res,next)
      const accessToken = await jwtsign(req, res, "1d", "a");
      res.setHeader("Authorization", `Bearer ${accessToken}`).json({message:'accessToken was made successfully!'})
    }
    res.status(200).json({message:"Token is verified by backend"})
  } catch (err) {
    console.log("Error is jwt acess verify", err);
  }
};

const jwtVerifyAccessMW = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).send("token babu not found");
    }
    const extractedToken=token.split(" ")[1];
    if (!extractedToken) {
      return res.status(400).send("extracted token not found");
    }
    const verified = await jwt.verify(extractedToken, process.env.JWT_SECRET_ACCESS);
    if (!verified) {
      await jwtVerifyRefresh(req,res,next)
      const accessToken = await jwtsign(req, res, "1d", "a");
      res.setHeader("Authorization", `Bearer ${accessToken}`).json({message:'accessToken was made successfully!'})
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
      res.status(401).json({ message: "User unauthorized , Login again" }).clearCookie('refreshToken').clearCookie('accountType').redirect(`${process.env.FRONTEND_URL}/login`);
    }
    next();
  } catch (err) {
    console.log("Error is jwt refresh verify", err);
  }
};
module.exports = {
  jwtsign,
  jwtVerifyAccess,
  jwtVerifyAccessMW,
  jwtVerifyRefresh
};
