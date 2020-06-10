const knex = require('../database/connection')

module.exports = {
	async index(req, res, next) {
		try {
			const { user_id, page = 1 } = req.query

			const pageLimit = 5
			const query = knex('projects')
				.limit(pageLimit)
				.offset((page - 1) * pageLimit)

			const countObj = knex('projects').count()

			if (user_id) {
				query.where({ user_id })
					.join('users', 'users.id', '=', 'projects.user_id')
					.select('projects.*', 'users.username')
					.where('users.deleted_at', null)

				countObj.where({ user_id })
			}

			const count = await countObj.first()
			res.header('X-Total-Count', count['count(*)'])

			const projects = await query

			return res.json(projects)
		} catch (error) {
			next(error)
		}
	},

	async store(req, res, next) {
		try {
			const { title, user_id } = req.body

			const response = await knex('projects').insert({ title, user_id })

			return res.status(201).json(response)
		} catch (error) {
			next(error)
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params
			const { title } = req.body

			const response = await knex('projects')
				.update({ title, updated_at: knex.fn.now() })
				.where({ id })

			return res.json(response)
		} catch(error) {
			next(error)
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params

			const response = await knex('projects')
				.where({ id })
				.del()

			return res.json(response)
		} catch (error) {
			next(error)
		}
	}
}