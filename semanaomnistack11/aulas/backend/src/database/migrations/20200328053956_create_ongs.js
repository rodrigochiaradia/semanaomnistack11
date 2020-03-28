/*Cria a tabela 'ongs'*/
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primmary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};
/**método '.down' é esecutado se algo der errado. Neste caso, informa-se ao programa que ele deve exluir a 
tabela que acabou de ser criada*/
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
