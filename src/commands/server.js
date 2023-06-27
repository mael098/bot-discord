// @ts-check

/**
 * 
 * @param {import('discord.js').ChatInputCommandInteraction<'cached'>} interaction 
 */
export async function execute(interaction) {
	interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
}

/**
 * @type {import('discord.js').ApplicationCommandDataResolvable}
 */
export const command = {
	name: 'server',
	description: 'Replies with server info!',
	
}
