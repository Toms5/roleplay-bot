const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mises à jour')
            .setDescription('Dernières mises à jour')
            .setColor('#ff000')
            .addField('V1.0.1', '-Patch : compatibilité des commandes avec les bots (Attention, les bots "TupperBox" ne sont pas encore compatibles.\n-ajout de la commande !maj')
            .addField('V1.1.0', '-Ajout de la commande !entre\n-Ajout de la commande !sort\n-Ajout de la commande !part\n-Ajout de la commande !statut\n-Ajout du statut dynamique')
            .setAuthor('RolePlay', 'http://www.shaarr.com/app/i-love-you/sharedImgs/7e928ec2dcd11e21ef98b11a7c242650.jpg')
            .setFooter(`Bot créé par ㄒㄖ爪'丂 | Propriété d'Arcandia`))
    },
    name:'maj'
}