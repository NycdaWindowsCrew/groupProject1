var Images = require('./../Models/imageModel.js');

var multer = require('multer');
var storage = multer.diskStorage({
 destination: function(req, file, callback){
  callback(null,'./public/imageUploads')
 },
 filename : function(req,file,callback){
  callback(null, file.fieldname+'-'+Date.now());
 }
});

var upload = multer({storage:storage}).single('image');

module.exports={
 read: function(req,res){
  Images.findAll()
  .then(function(result,err){
   if(err){
    console.log(err);
    res.send(err);
   }else{
    res.send(result);
   }
  });
 }, create: function(req,res){
  upload(req, res, function(err, result){
   if (err){
    console.log(err);
    return res.end("Image File not uploaded.");
   }else{
    res.send(req.file);
   }
  });
 }, createdatabase: function(req, res){
  Images.create(req.body)
   .then(function(result, err){
     if(err){
       res.send(err);
     } else {
       res.send(result);
     }
   });
 }, update: function(req,res){
  Images.findOne({
   where: {imageId:req.params.imageId}
  }).then(function(img){
   img.update(req.body)
   .then(function(result, err){
    if(err){
     console.log(err);
     res.send(err);
    }else{
     res.send(result);
    }
   });
  });
 }, delete: function(req, res){
  Images.destroy({
   where: {imageId:req.params.imageId}
  })
  .then(function(result,err){
   if(err){
    res.send(err);
   }else{
    res.send(res.body);
   }
  });
 }
};
