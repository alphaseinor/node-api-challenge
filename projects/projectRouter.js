const express = require('express')
const projectDb = require('../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
  res.send(`Project Endpoint`)
})

module.exports = router