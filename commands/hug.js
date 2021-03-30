const Discord = require('discord.js')

module.exports = {
    run: (message, args) =>{
        const member = message.mentions.members.first()
        const user = message.member
        if (!member) return message.channel.send(`Vous ne pouvez pas faire un câlin seul. Trouvez vous des amis !\n||Vous n'avez pas mentionné de joueur||`)
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${user} a fait un câlin à ${member}\n\n\nQu'est ce qu'ils sont mignon, vous ne trouvez pas ?`))
            
    },
    name:'hug'
}