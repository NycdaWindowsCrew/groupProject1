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
 passport.use('local-signup', new LocalStrategy({
 usernameField: 'email',
 passwordField: 'password',
 passReqToCallback: true
}, function(req, email, password, done){
 process.nextTick(function(){
  User.findOne({
   where: {email:email}
  }).then (function(user){
   if(user){
    if(bcrypt.compareSync(password, user.password)){
     console.log(user.id + " logged in successfully!");
     return done(null, user);
    }else{
     console.log("password entered is incorrect");
     return done(null, false);
    }
   }
  })
 });
}));
};
