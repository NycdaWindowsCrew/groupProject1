var LocalStrategy = require('passport-local').Strategy;
var User = require ('./../Models/userModel.js');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport){
 passport.serializeUser(function(user,done){
  console.log("User:", user);
  done(null, user.id);
 });
 passport.deserializeUser(function(id, done){
  console.log("Id:", id);
  User.findOne({
   where:{id:id}
  }).then(function(user){
   done(user);
  });
 });
 // to be continued with passport.use localsignup
};
