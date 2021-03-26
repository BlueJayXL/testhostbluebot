const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'fun', ['av']);
  }

  async run(client, message, args) {
    let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!mentionedMember) mentionedMember = message.member;

    const embed = new Discord.MessageEmbed()
      .setAuthor(mentionedMember.user.tag)
      .setTitle("Avatar")
      .setImage(mentionedMember.user.displayAvatarURL({ dynamic: true, size: 512 }))

    message.channel.send(embed);
  }
}