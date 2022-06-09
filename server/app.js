var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({
  createParentPath: true,
  limits: { fileSize: 20 * 1024 * 1024 },
  abortOnLimit: true
}));
app.use(morgan('dev'));

app.use('/api/v1/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
