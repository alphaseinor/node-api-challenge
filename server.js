const express = require('express');
const helmet = require('helmet')
const projectRouter = require('./projects/projectRouter')
const actionRouter = require('./actions/actionRouter')

const server = express();

// 3rd party middleware
server.use(express.json())
server.use(helmet())
server.use(logger)

server.use('/api/projects/', projectRouter)

server.get('/', (req, res) => {
  res.send(`Sprint Challenge`);
});

function logger(req, res, next) {
  console.log(`Method ${req.method}, URL ${req.url}, ${Date(Date.now).toString()}`)
  next()
}


module.exports = server;