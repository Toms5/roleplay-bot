const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Commandes')
            .setDescription('Liste des commandes de **RolePlay**')
            .setColor('#ff0000')
            .addField('!hug', 'Faites un câlin à vos amis', true)
            .addField('!kiss', 'Embrassez la personne de votre choix', true)
            .addField('!punch', 'Frappez la personne de votre choix', true)
            .addField('!entre', 'Utilisez cette commande lorsque vous rentrez quelque part !', true)
            .addField('!sort', 'Utilisez cette commande lorsque vous sortez de quelque part !', true)
            .addField('!passe', 'Utilisez cette commande lorsque vous passez quelque part !', true)
            .addField('!info', 'Obtenez toutes les dernières informations du bot !', true)
            .addField('!maj', 'Informez vous des dernières mises à jour du bot', true)
            .addField('!statut', 'Consultez le statut du bot', true)
            .addField('!idee', 'Utilisez cette commande pour proposer de nouvelles commandes ou des améliorations pour le bot', true)
            .setAuthor('RolePlay', 'http://www.shaarr.com/app/i-love-you/sharedImgs/7e928ec2dcd11e21ef98b11a7c242650.jpg')
            .setFooter(`Bot créé par ㄒㄖ爪'丂 | Propriété d'Arcandia`))
    },
    name:'help'
}