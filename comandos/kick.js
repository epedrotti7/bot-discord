
module.exports = function kick(message) {
    if (!message.guild) return;
        if (message.content.startsWith('!kick')) {
            const user = message.mentions.users.first();
            if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                .kick('Optional reason that will display in the audit logs')
                .then(() => {
                    message.reply(`Foi de beise ${user.tag}`);
                })
                .catch(err => {
                    message.reply('Não tenho como kikar esse my bad');
                    console.error(err);
                });
            } else {
                message.reply("Esse usuário não ta nesse server");
            }
            } else {
            message.reply("Tem que mencionar quem tu quer kikar seu tanso");
            }
        }
    };