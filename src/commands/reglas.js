//@ts-check




/**  
 * @param {import('discord.js').ChatInputCommandInteraction} interaction 
    */
export async function execute(interaction) {
   interaction.reply(`------reglas-------
   1. No hacer spam 
   2. no insultar`) 
}
export const command = {
    name: 'reglas',
    description: 'Muestra las reglas del servidor',
}