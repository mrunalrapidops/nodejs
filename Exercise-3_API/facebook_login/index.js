
const express = require('express');
const passport = require('passport');
const FacebookStrategy = require ('passport-facebook');

const app = express();

app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: '709481146113322',
    clientSecret: '72427818bd9c4b86fde0945a3f9d0780',
    callbackURL: 'http://localhost:8080/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    done( null, profile );
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/auth/facebook',
    passport.authenticate('facebook', {scope:["email"]}));

app.get('/auth/Facebook/callback',
  passport.authenticate('facebook',{
      failureRedirect: '/fail',
        successRedirect: '/success'
  }));

  app.get('/fail', (req, res) => {
    res.send('fail');
});

app.get('/success', (req, res) => {
    res.send('Successfull');
});
app.listen(8080);  
  