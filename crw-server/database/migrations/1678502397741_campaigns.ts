import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'campaigns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // user who makes the campaign
      table.integer('user_id')

      table.string('title')
      table.text('content')
      // target money for the campaign
      table.integer('target')
      table.string('target_date')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
