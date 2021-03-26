const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('async-run(post.announce.command)', 'fun', []);
  }

  async run(client, message, args) {

    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if(!message.member.id === '658920504513527808') return; 
    
      message.delete().catch(err => console.log(err));
      message.channel.send('Hey @everyone, Vyrus Gaming just posted a video! Go check it out! \n\nhttps://youtu.be/rmX5on3bX2A');
      
  }
}