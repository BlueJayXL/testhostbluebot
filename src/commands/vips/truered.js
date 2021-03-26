const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class timCommand extends BaseCommand {
  constructor() {
    super('truered', 'vips', []);
  }

  run(client, message, args) {
    message.channel.send('da goat');
  }
}