const express = require("express");
const app = express();

const morgan = require('morgan');
const bodyParser = require("body-parser");

const soundboardRouter = require('./soundboard/soundboard.route');


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
//

app.use('/api/soundboard', soundboardRouter);

module.exports = app;