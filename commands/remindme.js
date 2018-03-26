const Discord = require('discord.js');

// 5:13am / 6:30pm format
function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = `${hours}:${minutes}${ampm}`;
    return strTime;
}


module.exports.run = async (bot, message, args) => {
    let reminder = message.content.split(' ').slice(2).join(' ')
    const time = message.content.split(' ')[1].substring(1)

    let embed = new Discord.RichEmbed()
    .setColor('#447ec4')
    .setTitle(`Hey ${message.author.username}, your reminder has now been set!`)
    .setDescription(`I'll DM you your reminder when the time is up!`)

    message.channel.send(embed);

    let currTime = setInterval(() => {
        let now = formatAMPM(new Date());
        if (now === time) {
            message.author.send(reminder);
            clearInterval(currTime);
        }
    }, 1000)

}

module.exports.help = {
    name: "remindme"
}