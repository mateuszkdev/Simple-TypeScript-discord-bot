import { Message } from 'discord.js'
import { command, messageArgs } from '../types'
import { bot } from '../index'
import commandModel from '../models/command'

export const it =  async (client: bot, message: Message) => {

    if (message.author.bot || !message.guild) return

    if (!message.content.startsWith(client.config.prefix)) return 

    const [triggerName, ...args] = message.content.slice(client.config.prefix.length).split(/ +/g) 

    let mabyAlias: any = client.aliases.get(triggerName)
    const command: command = client.commands.get(triggerName) || client.commands.get(mabyAlias) 

    if (command) {

        new commandModel(client, message, command, args)

    }

}