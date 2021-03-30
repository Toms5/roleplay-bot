const Discord = require('discord.js')

module.exports = {
    run: (message, args) =>{
        const user = message.member
        let tab = [
                        `**${user} sort en courant.**`,
                        `**${user} sort en marchant.**`,
                    ]
                    let index = Math.floor(Math.random() * (tab.length))
                    message.channel.send(tab[index])
            
    },
    name:'sort'
}