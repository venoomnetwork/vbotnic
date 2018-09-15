const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('ONLINE');
});

client.on('message', message => {
    if (message.content === '!hello') {
    	message.reply('Hello there!');
  	}
});

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("VBotnic Info")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}
module.exports.help = {
  name:"botinfo"
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
