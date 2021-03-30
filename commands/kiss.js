const Discord = require('discord.js')

module.exports = {
    run: (message, args) =>{
        const member = message.mentions.members.first()
        const user = message.member
        if (!member) return message.channel.send(`Vous ne pouvez pas embrasser seul. Trouvez vous des amis !\n||Vous n'avez pas mentionné de joueur||`)
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${user} viens juste d'embrasser ${member}\n\n\nIls vont bien ensemble, non ? <3`))
    },
    name:'kiss'
}