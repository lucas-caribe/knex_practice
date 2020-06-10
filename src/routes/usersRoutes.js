const express = require('express')

const usersRoutes = express.Router()

const usersController = require('../controllers/UsersController')

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

function handleUpdate(error, req, res, next) {
	// tratamento de erro
	//
	//
	return res.status(error.status || 500).json({ message: error.message })
}

function handleDelete(error, req, res, next) {
	// tratamento de erro
	//
	//
	return res.status(error.status || 500).json({ message: error.message })
}

usersRoutes.get('/users', usersController.index, handleIndex)
usersRoutes.post('/users', usersController.store, handleStore)
usersRoutes.put('/users/:id', usersController.update, handleUpdate)
usersRoutes.delete('/users/:id', usersController.delete, handleDelete)

module.exports = usersRoutes