const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('ONLINE');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hello there!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
