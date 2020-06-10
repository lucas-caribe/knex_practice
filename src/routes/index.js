const express = require('express')

const routes = express.Router()

const usersRoutes = require('./usersRoutes')
const projectsRoutes = require('./projectsRoutes')

routes.use(usersRoutes)
routes.use(projectsRoutes)

module.exports = routes