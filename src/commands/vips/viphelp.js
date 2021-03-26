const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class viphelpCommand extends BaseCommand {
  constructor() {
    super('vips', 'information', []);
  }

  async run(client, message, args) {
    const sectionEmbed = new Discord.MessageEmbed()
    .setTitle('Hidden Menu')
    .addField('**Vip Commands:**', '`$dab`, `$frxzy`, `$mint`, `$nboy`, `$snoopy`, `$spinzz`, `$spinx`, `$intimanator`, `$truered`, `$typical`, `$volqz`')
    .setColor("#5708ab")
    .setFooter('You have found the hidden VIP menu!');

    message.channel.send(sectionEmbed)

  }
}