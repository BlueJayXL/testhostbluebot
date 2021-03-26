const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TypicalCommand extends BaseCommand {
  constructor() {
    super('mint', 'vips', []);
  }

  run(client, message, args) {
    message.channel.send('gum flavored mint');

  }
}