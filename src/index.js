const { Client } = require('discord.js');

const client = new Client({ intents: []});

client.on('ready', () => {
    console.log('Bot is running');
    client.user.setActivity();
});

client.login(process.env.TOKEN);