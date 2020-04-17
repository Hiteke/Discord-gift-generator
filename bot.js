const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');

client.on('ready', () => {
  var i = 0;
    while (i<1000) { //Number of messages
var password = generator.generate({
    length: 16,
    numbers: true
    });
 client.channels.get('Id').send("https://discord.gift/" + password); //Channel ID
 i++;
}
 });

client.login('token'); //Bot Token
