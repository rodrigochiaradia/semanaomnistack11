/*Importa o pacote knex*/
const knex = require('knex');

/*Importa a configuração*/
const configuration = require('../../knexfile');

/*Cria a conexão e passa o parâmetro da configuração do servidor "development"*/
const connection = knex(configuration.development);

/*exporta a conexão com o BD para onde o código a requerer*/
module.exports = connection;