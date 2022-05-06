const {createApp} =require('oitq')
const  httpServer = require('@oitq/plugin-http-server')
const oneBot =require('@oitq/plugin-one-bot')

createApp({logLevel: 'info'})
    .plugin(httpServer, {port: 80})
    .plugin(oneBot)
    .start()
