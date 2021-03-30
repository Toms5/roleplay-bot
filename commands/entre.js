const Discord = require('discord.js')

module.exports = {
    run: (message, args) =>{
        const user = message.member
        let tab = [
                        `**${user} entre en courant.**`,
                        `**${user} entre en marchant.**`,
                    ]
                    let index = Math.floor(Math.random() * (tab.length))
                    message.channel.send(tab[index])
            
    },
    name:'entre'
}