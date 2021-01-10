import { bot } from '../index'
import { readdirSync } from 'fs'
import { command } from '../types'

export default class commandsHandler {

    constructor (client: bot) {


        readdirSync(`${__dirname}/../plugins`).forEach(plugin => {

            const commands: Array<string> = readdirSync(`${__dirname}/../plugins/${plugin}`).filter(f => f.endsWith('.js'))

            console.log(`Viewing folder: ${plugin}`)

            console.log(`Found: ${commands}`)

            commands.forEach(cmd_file_name => {

                const cmd: command = require(`${__dirname}/../plugins/${plugin}/${cmd_file_name}`).data

                console.log(`Loading ${cmd_file_name}`)


                if (!cmd.name) return console.error(`>> ${cmd_file_name} must have command name!`)

                if (!cmd.run) return console.error(`>> ${cmd_file_name} must have run promise!`)

                if (!client.commands.has(cmd.name)) {

                    client.commands.set(cmd.name, cmd)

                    console.log(`Loaded as ${cmd.name}`)

                    if (cmd.aliases.length >= 1) {

                        console.log(`Loading aliases`)

                        cmd.aliases.forEach(alias => {

                            if (!client.aliases.get(alias)){

                                client.aliases.set(alias, cmd.name)

                            } else return console.error(`${alias} is declared in ${client.aliases.get(alias)} command!`)

                        })

                        console.log(`Loaded: ${cmd.aliases}\n`)

                    }

                } else return console.error(`${cmd_file_name} is declared!`)

            })

        })

    }

}