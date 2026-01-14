const jwt = require("jsonwebtoken");
const jwtsign = async (req, res) => {
  try {
    const token = await jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({'message':'Token Made Successfully','token':token})
  } catch (err) {
    console.log("err in jwt sign");
  }
};
const jwtverify = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return res.status(400).send("header not found");
    }
    const token = header.split(" ")[1];
    if (!token) {
      return res.status(400).send("token not found");
    }

    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    if(!verified){
        res.status(401).json({'message':'User unauthorized'})
    }
    next();
  } catch (err) {
    console.log("ërr is jwt verify");
  }
};
module.exports={
    jwtsign,jwtverify
}
