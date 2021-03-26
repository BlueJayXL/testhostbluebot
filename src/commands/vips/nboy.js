const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class nboyCommand extends BaseCommand {
  constructor() {
    super('nboy', 'vips', []);
  }

  run(client, message, args) {
    message.channel.send('WTV U WANt');
  }
}