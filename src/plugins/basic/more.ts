import { command, args } from '../../types'

export const data: command = {

    name: 'test',
    aliases: ['more', 'moretests'],
    dev: false,
    description: 'Examlple',

    run: async ( { client, message, args }: args ) => {

        return {

            author: 'Author',
            footer: `For ${message.author.tag}`,
            text: `> \`${args.length >= 1 ? args.join(" ") : 'Brak argumentow'}\``,
            thumbnail: message.author.displayAvatarURL({dynamic: true}),
            image: client.user?.displayAvatarURL()

        }

    }

}