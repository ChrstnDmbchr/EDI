const express = require("express");
const app = express();

const morgan = require('morgan');

const soundboardRouter = require('./soundboard/soundboard.route');


// middleware
app.use(morgan('dev'));
//

app.use('/', express.static(__dirname + '/public'));

app.use('/api/soundboard', soundboardRouter);

module.exports = app;