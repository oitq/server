const {createApp} =require('oitq')
const httpServer = require('@oitq/service-http-server')
const oneBot =require('@oitq/service-onebot')

const app=createApp({logLevel: 'info',port: process.env.PORT||8086})
  .service(httpServer)
  .service(oneBot)
  .start()
