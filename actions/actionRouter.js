const express = require('express')
const projectDb = require('../data/helpers/projectModel')
const actionDb = require('../data/helpers/actionModel')

const router = express.Router()


router.get('/actions/:id', (req, res) => {
  actionDb.get(req.params.id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(error => {
      res.status(500).json({
        message: "The action information could not be retrieved."
      })
    })  
})

router.post('/actions', validateProjectId, (req, res) => {
  actionDb.insert(req.body)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({message: "There was an error while saving the project to the database"})
  })
})

function validateProjectId(req, res, next){
  const id = req.body.project_id

  projectDb.get(id)
  .catch(()=>{
      res.status(400).json({message: "validateProjectID Project does not exist"})
  })


  next();
}

module.exports = router