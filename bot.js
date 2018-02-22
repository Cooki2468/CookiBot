const Discord = require("discord.js");
const bot = new Discord.Client();
const auth = require("./config.json");

bot.on("message", (message) => {

    if(message.content == "ping"){
        message.channel.send("pong!");
    }
})

bot.on("ready", () =>{
    console.log("READY!");
})

bot.login(process.env.BOT_TOKEN);
