const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    let serverIn = await client.guilds.cache.size;
    console.log(client.user.tag + ' has logged in.');
   
    client.user.setPresence({
      activity: {
        name: `$help`,
        type: "WATCHING"
      },
      status: 'dnd'
    })
      .catch(console.error);
    client.user.setUsername('Blue$')
      .then(user => console.log(`My new username is ${user.username}`))
      .catch(console.error);

  }
}