import {createApp} from "oitq";
import * as httpServer from '@oitq/plugin-http-server'
import * as oneBot from '@oitq/plugin-one-bot'

createApp({logLevel: 'info'})
    .plugin(httpServer, {port: 8086})
    .plugin(oneBot)
    .start()
