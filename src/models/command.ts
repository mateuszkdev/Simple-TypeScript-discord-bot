import { Message } from 'discord.js'
import { command, output, args } from '../types'
import embed from './embed'
import { bot } from '../index'

export default class cmdModel {

    message; command; args; client;

    constructor (client: bot, message: Message, command: command, args: Array<string>) {

        this.message = message
        this.command = command
        this.args = args
        this.client = client
        
        this.runCmd()

    }

    async runCmd() {

        const output: output = await this.command.run({ client: this.client, args: this.args, message: this.message })

        if (!output) return

        this.message.channel.send(
            new embed(output, this.message, this.client)
        )

    }

}