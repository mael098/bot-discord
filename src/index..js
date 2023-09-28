// @ts-check
import { Client, Events, GatewayIntentBits} from "discord.js"
import 'dotenv/config'
import commands from './cache/commands.js'

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.clientReady, (c) => {
  console.log(`esta encendido ${c.user.tag}`);
  const miservidor = c.guilds.cache.get('753389169732092015')
  miservidor?.commands.set(commands.map(cmd => cmd.command))
});

client.login()


client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;
	if (!interaction.inCachedGuild()) return
	commands.get(interaction.commandName)?.execute(interaction)		
});





