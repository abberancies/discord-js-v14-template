const { ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'online',
	description: "pings to see who's online",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
		interaction.reply({ content: "@everyone who's online?" })
	}
};