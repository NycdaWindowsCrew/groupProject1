var User = require('./../Models/userModel.js');

module.exports = {
 login: function(req,res){
  res.send(req.user);
 },
 read: function(req,res){
  User.findAll()
  .then(function(result,err){
   if(err){
    console.log(err);
    res.send(err);
   } else {
    res.send(result);
   }
  });
 },
 getMe: function(req,res){
  if(req.user){
   User.findOne({
    where: {id:req.user.id}
   }).then(function(result,err){
    if(err){
     console.log(err);
     res.send(err);
    }else{
     res.send(result);
    }
   });
  }else{
   res.send();
  }
 },
 logout: function(req,res){
  req.logout();
  console.log(req.params.id + " logged out successfully!!!");
  res.send();
 },
 create: function(req,res){
  User.create(req.body)
  .then(function(result,err){
   if(err){
    console.log(err);
    res.send(err);
   } else {
    res.send(result);
   }
  });
 },
 update: function(req,res){
  User.findOne({
   where: {id:req.params.id}
  }).then(function(user){
   user.update(req.body)
   .then(function(result, err){
    if(err){
     console.log(err);
     res.send(err);
    }else{
     res.send(result);
    }
   })
  });
 },
 delete: function(req,res){
  User.destroy({
   where: {id:req.params.id}
  }).then(function(result, err){
   if(err){
    console.log(err);
    res.send(err);
   }else{
    res.send(res.body);
   }
  });
 }
};
