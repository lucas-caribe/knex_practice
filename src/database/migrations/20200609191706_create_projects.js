
exports.up = function(knex) {
	return knex.schema.createTable('projects', table => {
		table.increments('id')
		table.text('title').notNullable()

		table.integer('user_id')
			.references('id')
			.inTable('users')
			.notNullable()
			.onDelete('CASCADE')

		table.timestamps(true, true)
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('projects')
};
