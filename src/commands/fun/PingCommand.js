const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'fun', ['ms']);
  }

  run(client, message, args) {
   
   
    message.channel.send('Finding bots ping...').then(msg => {
      const ping = msg.createdTimestamp - message.createdTimestamp;
      msg.edit(`Pong! \`${ping}ms\``);
    })
  }
}