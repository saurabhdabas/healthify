const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const videosRouter = require('./routes/videos');
const exercisesRouter = require('./routes/exercises');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/videos', videosRouter);
app.use('/exercises', exercisesRouter);

module.exports = app;
