var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// API
var apiRoutes = express.Router();
apiRoutes.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8,multipart/form-data,text/plain");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Content-Type", "multipart/form-data");
  res.header("Content-Type", "text/plain");
  res.header("Content-Type", "application/xml");
  // res.json({
  //   txt: 'api is ready'
  // });
  next();
});

// 返回搜索的城市
apiRoutes.get('/citySearch', (req, res) => {
  let searchStr = req.query.keyword;
  fs.readFile(path.join(__dirname + '/public/data/address.json'), 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    let citys = JSON.parse(data);
    let matchedCity = [];

    for (let i = 0; i < citys.length; i++) {
      if(citys[i].name.includes(searchStr)){
        matchedCity.push(citys[i].name);
      }
    }
    res.json(matchedCity);
  });
});

// 返回城市天气代码
apiRoutes.get('/cityCodeXML', (req, res) => {
  fs.readFile(path.join(__dirname + '/public/data/city.xml'), 'utf-8', (err, data) => {
    if (err) throw err;
    res.json({
      data: data
    });
  });
});

app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
