const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('spinx', 'vips', ['daddyspinx']);
  }

  async run(client, message, args) {
    message.channel.send('Loading \'SpinX\' command...').then(msg => { 
        msg.edit('Error: Command \"SpinX\" is too cool for me to load!');
      })
  }
}
