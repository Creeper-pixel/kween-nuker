const Discord = require('discord.js')
const chalk = require("chalk")
const levels = require("discord-xp")
const canvacord = require('canvacord');
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
    partials: ["CHANNEL"]
});
const config = require("./config.json")
const token = config.token
const db = config.mongouri
const prefix = config.fakeprefix
function startbot() { // you can start editing from here
    levels.setURL(db)
    client.once("ready", () => {
        client.user.setPresence({
            activities: [{
                name: 'discord leveling.'
            }]
        });
        console.log(chalk.green('[+] Fake bot started.'))
    })
    client.on("messageCreate", async(message) => {
        if (!message.guild) return;
        if (message.author.bot) return;

        const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
        const hasLeveledUp = await levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
        if (hasLeveledUp) {
            const user = await levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`);
        }
        if (message.content == `${prefix}rank`) {
            const target = message.mentions.users.first() || message.author; // Grab the target.
            const user = await levels.fetch(target.id, message.guild.id, true); // Selects the target from the database.
            message.channel.send(`User: ${target.username}#${target.discriminator}\nLevel: ${user.level}\nXP: ${user.xp}/${levels.xpFor(user.level + 1)}\nRank: ${user.position}`)
        }
        if (message.content == `${prefix}leaderboard`) {
            const rawLeaderboard = await levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

            if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

            const leaderboard = await levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

            const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.

            message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
        }
    });
    client.login(token)
}

exports.start = startbot
