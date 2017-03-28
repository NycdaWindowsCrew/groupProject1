var account = require('./../Config/config.js');
var User = require('./../Models/userModel.js');

var Seq = require('sequelize');

var seq = new Seq('postgres://'+account.usernameDB+':'+account.passwordDB+'@localhost:5432/instagramDB');

var Images = seq.define('images',{
 imageId:{type: Seq.INTEGER,
  autoIncrement: true,
  primaryKey:true,
  references :{
   model: User,
   key: 'id',
   deferrable: Seq.Deferrable.INITIALLY_IMMEDIATE
 }
},
 imageURL: {type: Seq.STRING, unique: true},
 imageTitle: Seq.STRING,
});
Images.sync();

module.exports = Images;
