const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Comando de teste.'),
	async execute(interaction) {
		await interaction.reply('Teste');
	},
};