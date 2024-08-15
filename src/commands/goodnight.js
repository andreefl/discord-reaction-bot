const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goodnight')
		.setDescription('Gives goodnight.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User to receive a nice goodnight message.')
				.setRequired(false)
		),
	async execute(interaction) {
		const user = interaction.options.getUser('user');

		if (user) {
			const username = user.globalName ?? user.username;
			await interaction.reply(`Boa noite ${username} ❤️`);
			return;
		}

		await interaction.reply('Boa noite grupo ❤️');
	},
};