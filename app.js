var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
var _ = require("lodash");
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var users = [
    {
        id: 1,
        name: 'admin',
        password: 'Ngoc29091996!'
    },
    {
        id: 2,
        name: 'user1',
        password: 'Ngoc29091996!'
    }
];


var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'tasmanianDevil123';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);
    next(null, jwt_payload)
    // usually this would be a database call:
    var user = users[_.findIndex(users, {id: jwt_payload.id})];
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});
passport.use(strategy);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sanpham = require('./routes/sanpham');
var loaisanpham = require('./routes/loaisanpham');
var nhasanxuat = require('./routes/nhasanxuat');
var taikhoan = require('./routes/taikhoan');
var Users = require('./routes/User');

var app = express();

app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

app.post("/login", function(req, res) {
    if(req.body.name && req.body.password){
        var name = req.body.name;
        var password = req.body.password;
    }
    // usually this would be a database call:
    var user = users[_.findIndex(users, {name: name})];
    if( ! user ){
        res.status(401).json({message:"no such user found"});
    }

    if(user.password === req.body.password) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = {id: user.id};
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({message: "ok", token: token});
    } else {
        res.status(401).json({message:"passwords did not match"});
    }
});

app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
    res.json({message: "Success! You can not see this without a token"});
});

app.get("/secretDebug",
    function(req, res, next){
        console.log(req.get('Authorization'));
        next();
    }, function(req, res){
        res.json("debugging");
    });

var authenticateController=require('./controllers/authenticate-controller');
app.use('/User',Users);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* route to handle login and registration */
app.post('/api/authenticate',authenticateController.authenticate);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', sanpham);
app.use('/api', loaisanpham);
app.use('/api',nhasanxuat);
app.use('/api',taikhoan);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
