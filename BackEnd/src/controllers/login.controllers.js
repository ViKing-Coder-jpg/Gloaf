const express = require("express");
const { userLoginSearch } = require("./user.controllers.js");
const { partnerLoginSearch } = require("./partner.controllers.js");
const { jwtsign } = require("../middlewares/oauth.js");
const {options} = require('../constants.js')



const loginSSO = async (req, res) => {
  const { type } = req.body;
  try {
    if (type == "Customer") {
      await userLoginSearch(req, res);
      const refreshToken = await jwtsign(req, res, "10d", "r");

      res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accountType", type, options)
        .json({ message: "Customer was Loggedin Successfully" });
    } else {
      await partnerLoginSearch(req, res);
      const refreshToken = await jwtsign(req, res, "10d", "r");
      res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accountType", type, options)
        .json({ message: "Restaurant was Loggedin Successfully" });
    }
  } catch (err) {
    console.log("Error in loginSSO controller", err);
  }
};

module.exports = {
  loginSSO,
};
