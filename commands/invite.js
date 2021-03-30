const Discord = require('discord.js')

module.exports = {
    run: message => message.channel.send('Invite **RolePlay** sur ton serveur : \nhttps://discord.com/api/oauth2/authorize?client_id=822929341230350346&permissions=8&scope=bot'),
    'name':'invite'
}