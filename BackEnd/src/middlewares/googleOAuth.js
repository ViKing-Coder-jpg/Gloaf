const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport=require('passport');
const dotenv =require('dotenv');
const {userFindOrCreateGoogle} =require('../controllers/user.controllers')
dotenv.config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      await userFindOrCreateGoogle(profile)


    }
  )
);
