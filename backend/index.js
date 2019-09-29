'use strict';

const express = require('express');
require('dotenv').config();
const cors        = require('cors');
const logger 	    = require('morgan');
const routes = require('./src/routes');
const bodyParser 	= require('body-parser');
const currencyService = require('./src/services/currency');

/* Actualiza la lista de monedas y cambios cada cierto tiempo */
// currencyService.updateCurrencyList();
// currencyService.updateCurrencyValues();

setInterval(() => {
  console.log(`Se actualizará la lista de cambios monetarios`);
  currencyService.updateCurrencyValues();
}, (process.env.UPDATE_EVERY || 3600000));


// App
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.set('env', process.env.NODE_ENV);
app.use(cors());


app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;

  res.status(err.status || 500);
  return res.send(err.message)
  // return ReE(res,err.message)
});


module.exports = app;