const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('snoopy', 'vips', []);
  }

  async run(client, message, args) {
    message.channel.send('poopy!').then(msg => {
        msg.edit('snoopys the best ;)');
      })
  }
}