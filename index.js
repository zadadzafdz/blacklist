const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
var test = [""]

bot.on('ready',() => {
  bot.guilds.forEach(guild => {
    console.log("Je suis connécté, mon id : "+bot.user.id).catch(e => {})
  })
  }); 

  bot.on("message", msg => {
    if(msg.content.startsWith("b!blacklist")){
      if(msg.author.id === "453608627052347393" || msg.author.id === "451361026328363029" ){
        var message = msg.content.split(" ").slice(1).join(" ")
        test.push(message)
        msg.reply(":white_check_mark: **J'ai ajouté** "+message+" **dans la liste des bans** :white_check_mark:").catch(e => {})
      }
      else{
        msg.reply(" :x: Seul mon maitre peut utilisé cette commande :x:").catch(e => {})
      }
    }
    if(msg.content === "b!listeban"){
      msg.channel.send(test).catch(e => {})
    }
  })
  bot.on('guildMemberAdd', member => {
    if (test.indexOf(member.id) != -1) {
      member.ban().catch(e => {})
  }
  })
  bot.login(process.env.BOT_TOKEN)
