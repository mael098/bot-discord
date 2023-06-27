// @ts-check

/**
 * 
 * @param {import('discord.js').ChatInputCommandInteraction} interaction 
 */
export async function execute(interaction) {
	interaction.reply('Pong!')
}

/**
 * @type {import('discord.js').ApplicationCommandDataResolvable}
 */
export const command = {
	name: 'ping',
	description: 'replies with Pong!',
}






