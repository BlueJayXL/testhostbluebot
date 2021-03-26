const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('frxzy', 'vips', []);
  }

  async run(client, message, args) {
    message.channel.send('searching for qts...').then(msg => {
        msg.edit('qt found: frxzy');
      })
  }
}