const express = require('express')
const projectDb = require('../data/helpers/projectModel')

const router = express.Router()

router.get('/', (req, res) => {
  //res.send(`Project Endpoint`)
  projectDb.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({
        error: "The posts information could not be retrieved."
      })
    })  
})

router.get('/:id', (req, res) => {
  res.send(`Project Endpoint ${req.params.id}`)
})


module.exports = router