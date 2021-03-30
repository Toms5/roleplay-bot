const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Statut')
            .setColor('#333fff')
            .addField('En ligne', 'Le bot est fonctionnel'))
            //.addField(`En programmation`,`Des bugs peuvent survenir.`))
    },
    name:'statut'
}