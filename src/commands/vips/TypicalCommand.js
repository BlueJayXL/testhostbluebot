const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('typical', 'vips', []);
  }

  async run(client, message, args) {
    message.channel.send('helped test the commands for this bot! <3');
   
  }
}