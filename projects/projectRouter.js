const express = require('express')
const projectDb = require('../data/helpers/projectModel')

const router = express.Router()

router.get('/', (req, res) => {
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
  projectDb.get(req.params.id)
    .then(post => {
      post.id !== null ? res.status(200).json(post) : res.status(404).json({
        message: "The post with the specified ID does not exist."
      })
    })
    .catch(error => {
      res.status(500).json({error: "The post information could not be retrieved."})
    })
})

router.post('/', (req, res) => {
  projectDb.insert(req.body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({error: "There was an error while saving the post to the database"})
  })
})


module.exports = router