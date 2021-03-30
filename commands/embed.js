const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setDescription('La première ligne\nla deuxième ligne')
            .setColor('#ff0000')
            .addField('Champ 1', 'Bonjour, je suis le champ 1', true)
            .addField('Champ 2', 'Bonjour, je suis le champ 2', true)
            .setAuthor('DarkKikouLolDu89', 'https://img.lemde.fr/2020/03/09/0/0/1621/908/664/0/75/0/0040dbf_JOdRjqjN1I6HksyNZCUqY1su.JPG', 'https://fr.pornhub.com')
            .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJn00AgnkbzIP2UA2YMa6CAFbZ-hGSobOcg&usqp=CAU'))
    },
    name:'embed'
}