const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class spinzzCommand extends BaseCommand {
  constructor() {
    super('spinzz', 'vips', []);
  }

  run(client, message, args) {
    message.channel.send('"For me too, idc what you put surprise me" - spinzz');
  }
}