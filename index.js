const { setInterval } = require('timers')

const Discord = require('discord.js'),
client = new Discord.Client({
    fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')

    bot.login(process.env.TOKEN2);
    client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw (err)
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT') return
    
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

client.on('ready', () => {
    console.log('I am ready!');
  });

client.on('ready', () => {
    const statuses = [
        '| UPDATE | V1.1.0',
        `| Bot créé par ㄒㄖ爪'丂`,
        '| !help',
        '| Bon RolePlay !',
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i], {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
})