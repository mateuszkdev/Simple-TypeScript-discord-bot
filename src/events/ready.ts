import { bot } from '../index'

export const it = async (client: bot) => {

    client.user?.setStatus('idle')

    console.log(`Connected to ws as ${client.user?.tag}!`)

}