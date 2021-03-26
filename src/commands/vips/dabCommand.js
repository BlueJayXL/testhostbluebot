const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TypicalCommand extends BaseCommand {
  constructor() {
    super('dab', 'vips', []);
  }

  run(client, message, args) {
    message.channel.send('Fun Fact: dabs known as the god recruiter 🤯');
  }
}