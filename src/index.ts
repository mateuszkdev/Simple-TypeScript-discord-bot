import { Client, ClientOptions } from 'discord.js'

import EventsHandler from './handlers/events.handler'
import commandsHandler from './handlers/commands.handler'

export class bot extends Client {

    #tokens = require('../settings/tokens.json')

    config; eventHandler; commandsHandler;

    commands: Map<string, any> 
    aliases: Map<string, string>

    constructor (options: ClientOptions) {

        super(options)

        this.commands = new Map()
        this.aliases = new Map()

        this.config = require('../settings/config.json')

        this.eventHandler = new EventsHandler(this)
        this.commandsHandler = new commandsHandler(this)


        this.login(process.argv[2] === 'beta' ? this.#tokens.beta : this.#tokens.main)
        console.log(`Using ${process.argv[2] === 'beta' ? 'beta' : 'main'} token.`)

    }

}

const BOT = new bot({ partials: ["MESSAGE", "REACTION", "CHANNEL"] })
export default BOT