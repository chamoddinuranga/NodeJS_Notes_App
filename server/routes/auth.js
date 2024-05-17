const express   = require('express');
const router    = express.Router();
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {

    console.log(profile);
  }
));

//Google login Route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }));

  //Receive User Data
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    successRedirect: '/dashboard'
 })
  );
  //Routes if somethins goes wrong
  router.get('/login-failure', (req, res) => {
    res.send('Failed to login');
  });

  //Presist user data after successful authenticaiton
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });


  //Retrieve user data from session
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

module.exports = router;