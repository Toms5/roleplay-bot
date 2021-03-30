const Discord = require('discord.js')

module.exports = {
    run: (message, args) =>{
        const member = message.mentions.members.first()
        const user = message.member
        if (!member) return message.channel.send(`Vous ne pouvez pas frapper seul. Trouvez vous des amis !\n||Vous n'avez pas mentionné de joueur||`)
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${user} viens juste de frapper ${member}\n\n\nÇa à dû faire mal !`))
    },
    name:'punch'
}