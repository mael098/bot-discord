//@ts-check

/**
 *@param {import('discord.js').ChatInputCommandInteraction<'cached'>} interaction
 */

export async function execute(interaction) {
  interaction.reply(
    " Bienvenido a la comunidad de discord de la comunidad de programadores CodeLAN");
}
export const command = {
  name: "entrada",
  description: "la bienvenida del usuario",
};


