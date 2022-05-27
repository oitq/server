const {createApp} =require('oitq')
const httpServer = require('@oitq/plugin-http-server')
const oneBot =require('@oitq/plugin-one-bot')

const app=createApp({logLevel: 'info',port: process.env.PORT||8086})
  app.plugin(httpServer)
  app.plugin(oneBot)
  app.start()
