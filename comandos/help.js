const { MessageEmbed } = require('discord.js');

module.exports = function help(msg) {
  if (msg.content === '!help' || msg.content === '!ajuda' || msg.content === '!comandos') {
    const embed = new MessageEmbed()
      .setTitle('🤖 Comandos do paiasso 🤖')
      .setDescription(`
        **!ajuda, !help ou !comandos** - Mostra todos os comandos do nosso bot;
        **!play {link youtube}** - Toca a música que tu escolheu;
        **!stop ** - Para a música e kika o bot kk;
        **!naoso ** - Nao so paiasso;
        **!kick {@nick}** - Kika alguém do server;
        **!bot ** - O Gostosão do discord;


        
        
      `)
      .setColor('#fff200');
    msg.channel.send(embed);
  }
};