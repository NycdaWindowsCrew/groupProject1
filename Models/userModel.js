var account = require('./../Config/config.js');
//var Images = require('./../Models/imageModel.js');

var Seq = require('sequelize');

var seq = new Seq('postgres://'+account.usernameDB+':'+account.passwordDB+'@localhost:5432/instagramDB');

var User = seq.define('users',{
 id:{type:Seq.INTEGER,
  autoIncrement:true,
  primaryKey:true,
  //references:{
  ////model: Images,
  //key: 'imageId',
  //deferrable: Seq.Deferrable.INITIALLY_IMMEDIATE
//}
},
 email:{type:Seq.STRING, unique:true},
 password:Seq.STRING,
 firstname:Seq.STRING,
 lastname:Seq.STRING,
 birthdate:Seq.DATEONLY
});
User.sync();
module.exports = User;
