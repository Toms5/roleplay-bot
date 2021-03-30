const Discord = require('discord.js')

module.exports = {
    run: (message, args) =>{
        const user = message.member
        let tab = [
                        `**${user} passe par ici.**`,
                        `**${user} passe en trotinant.**`,
                    ]
                    let index = Math.floor(Math.random() * (tab.length))
                    message.channel.send(tab[index])
            
    },
    name:'passe'
}