const Discord   = require('discord.js');
const client    = new Discord.Client();
const cfg       = require("./cfg/authentification");

client.on('ready', () => {
  console.log(`Client Successfully logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(cfg.AuthKey).catch((err) => {
    console.log('[ERROR] : Invalid token');
});
