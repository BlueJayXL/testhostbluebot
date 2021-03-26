const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  async run(client, message, args) {

    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if(!message.member.id === '658920504513527808') return; 

    const sayMessage = args.join(" ");
    
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessage);
      
  }
}