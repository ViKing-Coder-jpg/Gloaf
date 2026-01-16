const { jwtsign } = require("../middlewares/oauth.js");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();
require("../middlewares/googleOAuth.js");

const options = {
  httpOnly: true,
  secure: true,
};

const signupGoogle = (req, res, next) => {
  return passport.authenticate("google", { scope: ["email", "profile"] })(
    req,
    res,
    next
  );
};
const signupGoogleCallback = (req, res, next) => {
  return passport.authenticate(
    "google",
    { session: false },
    async (err, user) => {
      if (err || !user) {
        return res.status(401).json({ message: "Google auth failed" });
      }
      const acessToken = await jwtsign(req, res, "1h", "a");
      const refreshToken = await jwtsign(req, res, "5d", "r");
      res
        .status(201)
        .cookie("acessToken", acessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accountType", "Customer", options)
        .json({ message: "Customer was created Successfully By Google" })
        .redirect(`http://localhost:5173/customer`);
    }
  )(req, res, next);
};

module.exports = {
  signupGoogle,
  signupGoogleCallback,
};
