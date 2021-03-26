const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class volqzCommand extends BaseCommand {
  constructor() {
    super('volqz', 'vips', []);
  }

  run(client, message, args) {
    message.channel.send('you mean daddy volqz?');
  }
}