const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Info')
            .setDescription('Informations sur **RolePlay**')
            .setColor('#ff0000')
            .addField('Version:', '1.0.0', true)
            .addField('Auteur:', 'Tom\'s', true)
            .setFooter(`Pour toute suggestion de nouvelle commandes, contactez ㄒㄖ爪'丂 en mp !`))
    },
    name:'info'
}