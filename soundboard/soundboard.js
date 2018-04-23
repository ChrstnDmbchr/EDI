
const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const bot = require('../bot');

let connection = null;
let dispatcher = null;

module.exports.run = async (bot, message, args) => {
 console.log(args);
};

module.exports.help = {
	name: "soundboard"
};