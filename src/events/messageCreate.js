const { Events } = require('discord.js');
const { anyUser, anyUserReaction, whitelist } = require('../config/reactionsConfig.json');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
		if (anyUser === true) {
			message.react(anyUserReaction)
			return;
		}

		const username = message.author.username;
		const user = whitelist.find(user => {
			return user.id == username;
		});

		if (!user) {
			return;
		}

		message.react(user.reaction);
	},
};