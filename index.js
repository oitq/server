const {createApp} =require('oitq')
const httpServer = require('@oitq/plugin-http-server')
const oneBot =require('@oitq/plugin-one-bot')

reateApp({logLevel: 'info',port: process.env.PORT||8086})
  .plugin(httpServer)
  .plugin(oneBot)
  .start()
