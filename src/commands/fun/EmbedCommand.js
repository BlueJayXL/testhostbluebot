const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends BaseCommand {
  constructor() {
    super('embed', 'fun', []);
  }
  
  async run(client, message, args) {
    const messageToSay = args.join(" ");
   
    const sayEmbed = new Discord.MessageEmbed()
      .setDescription(`${messageToSay}`)
      .setFooter(message.author.tag ,message.author.displayAvatarURL())
      .setColor("#5708ab")
      .setFooter(message.author.tag ,message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp();
      
      message.delete().catch(err => console.log(err));
      
      try {
        await message.channel.send(sayEmbed);
      } catch (err) {
        console.log(err);
        message.channel.send('I am not able to say that message.')
      }
  }
}