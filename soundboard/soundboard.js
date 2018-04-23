
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const path = require('path');

const bot = require('../bot');

let connection = null;

module.exports.run = async (bot, message, args) => {
  
  // Enter the voice channel of user ItsChrstn as soundboard does not message
  const guildArr = Array.from(bot.guilds)
  let guildMember
  for (let i = 0; i < guildArr.length; i++) {
    if(guildArr[i][1].members.get('136499610947551232').voiceChannelID){
      guildMember = guildArr[i][1].members.get('136499610947551232');
    }
  };
  //

  if (guildMember) {
    if (!connection) {
      connection = await guildMember.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playFile(path.resolve(__dirname, 'audio', `${args.play}.mp3`));
        dispatcher.setVolume(0.2);
        dispatcher.on('end', end => {
          if (dispatcher){
            dispatcher.end();
          }
          guildMember.voiceChannel.leave();
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  } else {
    console.log('ERROR: User ItsChrstn is not in a voice channel, soundboard not playing.')
  }

};

module.exports.help = {
	name: "soundboard"
};