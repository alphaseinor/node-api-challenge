const express = require('express')
const projectDb = require('../data/helpers/projectModel')
const actionDb = require('../data/helpers/actionModel')

const router = express.Router()

router.get('/', (req, res) => {
  projectDb.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      res.status(500).json({
        message: "The project information could not be retrieved."
      })
    })  
})

router.get('/:id', (req, res) => {
  projectDb.get(req.params.id)
    .then(project => {
      post.id !== null ? res.status(200).json(project) : res.status(404).json({
        message: "The project with the specified ID does not exist."
      })
    })
    .catch(error => {
      res.status(500).json({message: "The project information could not be retrieved."})
    })
})


router.post('/', (req, res) => {
  projectDb.insert(req.body)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({message: "There was an error while saving the project to the database"})
  })
})

router.put('/:id', (req, res) => {
  projectDb.update(req.params.id, req.body)
    .then(updatedProject => {
      res.status(200).json(updatedProject)
    })
    .catch(error => {
      res.status(500).json({message:"unable to update project"})
    })
});

router.delete('/:id', (req, res) => {
  projectDb.remove(req.params.id)
    .then(deleted => {
        res.status(200).json({message: `removed ${deleted} item`})
    })
    .catch(error=> {
      res.status(500).json({message: "unable to delete project"})
    })
});



module.exports = router