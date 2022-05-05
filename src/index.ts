import {createApp} from "oitq";
import * as httpServer from '@oitq/plugin-http-server'
import * as oneBot from '@oitq/plugin-one-bot'

const app = createApp({logLevel: 'info'})
app.plugin(httpServer, {port: 8086}).plugin(oneBot)
app.addBot({
    uin: 1234567890,
    password: '*********',
    type: "password",
    config: {platform: 5},
    oneBot: true
})
app.start()
