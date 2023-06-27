// @ts-check

/**
 * 
 * @param {import('discord.js').ChatInputCommandInteraction} interaction 
 */
export async function execute(interaction) {
  interaction.reply(
    `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
  );
}

/**
* @type {import('discord.js').ApplicationCommandDataResolvable}
*/

export const command = {
	name: 'user',
	description: 'Replies with user info!',
} 


