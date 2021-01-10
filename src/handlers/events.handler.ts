import { bot } from '../index'
import { readdirSync } from 'fs'

export default class eventsHandler {

    constructor (client: bot) {

        const events: Array<String> = readdirSync(`${__dirname}/../events`).filter(f => f.endsWith('.js'))

        events.forEach(event => {

            const file = require(`${__dirname}/../events/${event}`)

            let eventName: string = event.split(/\./g)[0]

            console.log(`Loaded file [${event}] as event [${eventName}]`)

            client.on(eventName, (...args) => file.it(client, ...args ) )

        })

    }

}