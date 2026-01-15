const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const jwtsign = async (req, res,time,option) => {
  try {
    const token = await jwt.sign(
      { Email: req.body.Email, type: req.body.type },
      option=='a'?process.env.JWT_SECRET_ACCESS:process.env.JWT_SECRET_REFRESH,
      { expiresIn: time }
    );
    return token;
  } catch (err) {
    console.log("error in jwt sign", err);
  }
};
const jwtVerifyAccess = async (req, res, next) => {
  try {
    const cookie = req.cookie.accessToken;
    if (!cookie) {
      return res.status(400).send("cookie not found");
    }
    const token = cookie.split(" ")[1];
    if (!token) {
      return res.status(400).send("token not found");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET_ACCESS);
    if (!verified) {
      res.status(401).json({ message: "User unauthorized" });
    }
    next();
  } catch (err) {
    console.log("Error is jwt acess verify", err);
  }
};
const jwtVerifyRefresh = async (req, res, next) => {
  try {
    const cookie = req.cookie.refreshToken;
    if (!cookie) {
      return res.status(400).send("cookie not found");
    }
    const token = cookie.split(" ")[1];
    if (!token) {
      return res.status(400).send("token not found");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET_REFRESH);
    if (!verified) {
      res.status(401).json({ message: "User unauthorized" });
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
