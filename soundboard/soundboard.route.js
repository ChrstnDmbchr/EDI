const express = require('express');
const router = express.Router();

const bot = require('../bot');

const soundboard = require('./soundboard');

router.get('/', (req, res) => {
  res.status(200).send('<h1>This is the soundboard page!</h1>');
});

router.post('/', (req, res) => {
  soundboard.run(bot, null, req.body);
  res.status(200).send({
    success: `playing ${req.body.play}`
  });
});

module.exports = router;