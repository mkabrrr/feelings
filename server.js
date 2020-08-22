const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
//
//
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels
    .find(ch => ch.id === "745799376139583488" && ch.type === "voice")
    .join();
  client.user.setPresence({
    game: {
      name: "",
      type: 0
    }
  });
  //setInterval(intervalFunc, 1500);
});




client.on("message", message => {
if (!message.channel.id == "746497904406954164") return;
    if (message.author.bot) return;
    if (message.channel.id == "746497904406954164") {
    var args = message.content
    var trash = message.guild.emojis.find(emoji => emoji.name == 'Heart');
    var heart = message.guild.emojis.find(emoji => emoji.name == 'rtweet');
    var retwet = message.guild.emojis.find(emoji => emoji.name == 'trash');
    const embed = new Discord.RichEmbed()
    .setColor("#F3DEDE")
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .addField("Huuuuge.", `${args}`)
    .setThumbnail(message.author.avatarURL);
    client.channels.get("746497904406954164").send(embed).then
    (async embed => {
    await embed.react(heart.id);
    await embed.react(retwet.id);
    await embed.react(trash.id);
    message.delete();
});}});




client.on("message", async message => {
   
  if (message.guild.id != 714221802762665984) return;
  if (message.channel.id != 746497904406954164) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/746080140928483348/746495049872965733/image0.jpg"]});

  }
  


})

client.login("NzQ2NDk4MTMzODQ4MjI3ODYx.X0BMkA.YQIc1ot5kgnxxDWwZ2z3kMvZ0Tc");


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("idie");

  client.user.setActivity(`Huge Server.`, { type: "WATCHING" });
});


const Owner = ['399395241704030230'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(3).join(' ');
    if (!Owner.includes(message.author.id)) return; 
    if (message.content.startsWith(prefix + 'vip set game')) {
      if(!argresult) return message.channel.send(`:bulb: **Usage : v set game \`[GAME]\`**`);
    client.user.setGame(argresult);
      message.channel.send(`**:white_check_mark: Changed the Bot PLAYING to » \`${argresult}\`**.`)
    } else                      
    if (message.content.startsWith(prefix + 'vip set watch')) {
            if(!argresult) return message.channel.send(`:bulb: **Usage :  set watch \`[GAME]\`**`);
    client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**:white_check_mark: Changed the Bot WATCHING to » \`${argresult}\`**.`)
    } else 
    if (message.content.startsWith(prefix + 'vip set listen')) {
            if(!argresult) return message.channel.send(`:bulb: **Usage :  set listen \`[GAME]\`**`);
    client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**:white_check_mark: Changed the Bot LISTENING to » \`${argresult}\`**.`)
    } else 
    if (message.content.startsWith(prefix + 'vip set stream')) {
            if(!argresult) return message.channel.send(`:bulb: **Usage :  set stream \`[GAME]\`**`);
    client.user.setGame(argresult, "https://www.twitch.tv/imd3s_x");
      message.channel.send(`**:white_check_mark: Changed the Bot STREAMING to » \`${argresult}\`**.`)
    }
    if (message.content.startsWith(prefix + 'vip set name')) {
            if(!argresult) return message.channel.send(`:bulb: **Usage :  set name \`[NAME]\`**`);
    client.user.setUsername(argresult).then
      message.channel.send(`**:white_check_mark: Changed the Bot NAME to » \`${argresult}\`**.`)
  } else
    if (message.content.startsWith(prefix + 'vip set avatar')) {
            if(!argresult) return message.channel.send(`:bulb: **Usage :  set avatar \`[AVATAR URL]\`**`);
    client.user.setAvatar(argresult);
      message.channel.send(`**:white_check_mark: Changed the Bot AVATAR to » \`${argresult}\`**.`);
  }
  });
