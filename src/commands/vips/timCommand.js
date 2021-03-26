const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class timCommand extends BaseCommand {
  constructor() {
    super('intimanator', 'vips', []);
  }

  run(client, message, args) {
    message.channel.send('big timmy');
  }
}