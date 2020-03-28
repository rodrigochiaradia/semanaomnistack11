/*Cria a tabela 'incidents'*/
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable;

        table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  /**método '.down' é esecutado se algo der errado. Neste caso, informa-se ao programa que ele deve exluir a 
  tabela que acabou de ser criada*/
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
