const { Client } = require('discord.js');
const client = new Client();
const { Player } = require("discord-player");
const player = new Player(client)
client.player = player;


const bot = require('./comandos/bot');
const kick = require('./comandos/kick');
const naoso = require('./comandos/naoso');
const help = require('./comandos/help');


client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on("message", async message => {
    let prefix = "!";

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'play'){
        await client.player.play(message, args[0]);
        message.channel.send(`Tu tem um péssimo gosto musical, by the way`);
    }

    if(command === 'stop'){

        await client.player.stop(message);

        message.channel.send(`Graças ao sol, nao aguentava mais`)
    }
})


client.on('message', (msg) => {
  
  bot(msg);
  kick(msg);
  naoso(msg);
  help(msg)
  
});
