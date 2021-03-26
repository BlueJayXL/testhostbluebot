const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('facts', 'fun', []);
  }

  async run(client, message, args) {
    message.channel.send('Finding facts...').then(msg => {
        msg.edit(`Found a fact: VY > 9w`);
      })
  }
}