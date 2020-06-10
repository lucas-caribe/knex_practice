const express = require('express')

const projectsRoutes = express.Router()
const projectsController = require('../controllers/ProjectsController')

function handleIndex(error, req, res, next) {
	// tratamento de erro
	//
	//
	return res.status(error.status || 500).json({ message: error.message })
}

function handleStore(error, req, res, next) {
	// tratamento de erro
	//
	//
	return res.status(error.status || 500).json({ message: error.message })
}

projectsRoutes.get('/projects', projectsController.index, handleIndex)
projectsRoutes.post('/projects', projectsController.store, handleStore)

module.exports = projectsRoutes