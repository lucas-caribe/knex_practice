const express = require('express')

const projectsRoutes = express.Router()
const projectsController = require('../controllers/ProjectsController')

function handleError(error, req, res, next) {
	return res.status(error.status || 500).json({ message: error.message })
}

projectsRoutes.get('/projects', projectsController.index, handleError)
projectsRoutes.post('/projects', projectsController.store, handleError)
projectsRoutes.put('/projects/:id', projectsController.update, handleError)
projectsRoutes.delete('/projects/:id', projectsController.delete, handleError)

module.exports = projectsRoutes