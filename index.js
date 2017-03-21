var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');


var userCtrl = require('./Ctrls/userCtrl.js');
var imageCtrl = require('./Ctrls/imageCtrl.js');

var app = express();

require('./Config/passport.js')(passport);

app.use(cors());
app.use(session({
 secret: config.secret,
 resave: true,
 saveUninitialized: true,
 cookie: {maxAge:1000*60*60*2}
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/public"));

app.post('/login')
app.get('/users',userCtrl.read);
app.get('/users/me', userCtrl.getMe);
app.get('/logout', userCtrl.logout);

// comment
app.listen(8000, function(){
 console.log("Listening at 8000");
});
