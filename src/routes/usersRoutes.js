const express = require('express')

const usersRoutes = express.Router()

const usersController = require('../controllers/UsersController')

function handleError(error, req, res, next) {
	return res.status(error.status || 500).json({ message: error.message })
}

usersRoutes.get('/users', usersController.index, handleError)
usersRoutes.post('/users', usersController.store, handleError)
usersRoutes.put('/users/:id', usersController.update, handleError)
usersRoutes.delete('/users/:id', usersController.delete, handleError)

module.exports = usersRoutes