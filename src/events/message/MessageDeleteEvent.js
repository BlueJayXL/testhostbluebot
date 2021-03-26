const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageEvent extends BaseEvent {
    constructor() {
        super('messageDelete');
    }

    async run(client, message) {
        client.snipes.set(message.channel.id, {
            content: message.content,
            author: message.author
        });
    }
}