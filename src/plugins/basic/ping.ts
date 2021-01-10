import { command, args } from '../../types'

export const data: command = {

    name: 'ping',
    aliases: ['pong', 'pingpong'],
    dev: false,
    description: 'Client WS ping',
    
    run: async ( { client, message }: args ) => {

        return {

            author: 'WS ping',
            footer: `For ${message.author.tag}`,
            text: `> Pong: \`${client.ws.ping}\`ms`

        }

    }

}