
const { MessageEmbed } = require('discord.js');

module.exports = function bot(msg) {
  if (msg.content === '!bot') {
    const embed = new MessageEmbed()
      .setTitle('🤖 nao so paiasso 🤖')
      .setDescription(`
       🔗 https://github.com/eliton-pedrotti 😎
      `)
      .setFooter('Criado com 💛')
      .setColor('#fff200');
      
    msg.channel.send(embed);
  }
};