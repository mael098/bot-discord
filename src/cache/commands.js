//@ts-check
import { Collection }  from "offdjs/djs";

/**
 * @typedef {Object} command
 * @property {import('discord.js').ApplicationCommandDataResolvable} command
 * @property {(interaction: import('discord.js').ChatInputCommandInteraction<'cached'>) => Promise<any>} execute 
*/

/**
 * @type {import('discord.js').Collection<string, command>}
 */

const cache = new Collection()

import * as ping from '../commands/ping.js'
cache.set('ping', ping)

import * as server from '../commands/server.js'
cache.set('server', server)
 
import * as user from '../commands/user.js'
cache.set('user',user)

import * as entrada from '../commands/entrada.js'

cache.set('entrada', entrada)

import * as reglas from '../commands/reglas.js'

cache.set('reglas', reglas)

export default cache


