const restify = require('restify')
const server = restify.createServer()
const PORT = 4000
const corsMiddleware = require('restify-cors-middleware')
const fileReader = require('../server/model/fileReader')
const fs = require('fs')
const jsonData = require('./json.json')
const stuff = require('./model/stuff')
// Middleware
server.use(restify.plugins.bodyParser())

let cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['X-App-Version', 'Authorization'],
  exposeHeaders: []
})

server.pre(cors.preflight)
server.use(cors.actual)

server.listen(process.env.PORT || 4000, () => {
  console.log('Successfully stared at localhost:' + PORT)
  require('./routes/root')(server)
})

stuff.calcPearson()

//console.log(jsonData.blogs)

// let json = fileReader.readFile()
// fs.writeFile('./json.json', JSON.stringify(json), err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('File has been created')
// })
