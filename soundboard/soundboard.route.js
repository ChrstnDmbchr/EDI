const express = require('express');
const router = express.Router();
const path = require('path')
const bot = require('../bot');

const formBody = require('body/form')

const soundboard = require('./soundboard');
const generateJSON = require('./soundboardGenerator');

router.get('/', (req, res) => {
  generateJSON(data => {
    res.status(200).json(data)
  });
});

router.post('/', (req, res) => {
  formBody(req, (err, body) => {
    soundboard.run(bot, null, body);
  });
  res.redirect('back');
});

module.exports = router;