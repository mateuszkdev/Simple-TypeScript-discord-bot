import {

    BitFieldResolvable, ColorResolvable,
    PermissionString, Message

} from 'discord.js'

import {
    bot
} from './index'

export interface command {

    name: string,
    aliases: string[],
    description?: string,
    usage?: string,
    dev?: Boolean,
    permissions?: Array<BitFieldResolvable<PermissionString>>,
    run: (...args: any) => Promise<any>

}


export interface output {

    author?: string[],
    color?: ColorResolvable,
    text?: string,
    footer?: string[],
    thumbnail?: string,
    timestamp?: Date | Number,
    image?: string

}


export interface args {

    message: Message,
    client: bot,
    args: Array<string>

}

export type messageArgs = [any?]