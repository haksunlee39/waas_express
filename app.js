const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const todoRouter = require('./routes/todo');
const formRouter = require('./routes/form');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todo', todoRouter);
app.use('/form', formRouter);

// 404 Not Found
app.use(function(req, res, next) {
  res.status(404).send("404 Not Found");
});

module.exports = app;
