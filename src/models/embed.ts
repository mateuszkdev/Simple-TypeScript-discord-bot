import { MessageEmbed } from 'discord.js'
import { output } from '../types'
import { Message } from 'discord.js'
import { bot } from '../index'

export default class embed extends MessageEmbed {

    data: output; client; message;

    constructor (data: output, message: Message, client: bot) {

        super()

        this.data = data
        this.message = message
        this.client = client


        if (this.data.author) this.setAuthor(this.data.author, this.client.user?.displayAvatarURL())

        if (this.data.color) this.setColor(this.data.color)

        if (this.data.text) this.setDescription(this.data.text)

        if (this.data.footer) this.setFooter(this.data.footer, this.message.author.displayAvatarURL({dynamic: true}))

        if (this.data.thumbnail) this.setThumbnail(this.data.thumbnail)

        if (this.data.timestamp) this.setTimestamp()

        if (this.data.image) this.setImage(this.data.image)

    }

}