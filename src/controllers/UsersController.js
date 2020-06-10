const knex = require('../database/connection')

module.exports = {
	async index(req, res, next) {
		try {
			const users = await knex('users').where('deleted_at', null)

			return res.json(users)
		} catch (error) {
			next(error)
		}
	},

	async store(req, res, next) {
		try {
			const { username } = req.body

			const response = await knex('users').insert({ username })

			return res.status(201).json(response)
		} catch (error) {
			next(error)
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params
			const { username } = req.body

			const response = await knex('users')
				.update({ username, updated_at: knex.fn.now() })
				.where({ id })

			return res.json(response)
		} catch (error) {
			next(error)
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params

			const response = await knex('users')
				.update('deleted_at', knex.fn.now())
				.where({ id })

			return res.json(response)
		} catch (error) {
			next(error)
		}
	}
}