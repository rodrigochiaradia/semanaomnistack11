/*Aciona a dependência (pacote/"aplicação") 'express' na variável 'express'*/
const express = require('express');

/*Aciona a dependência (pacote/"aplicação") 'crypto' na variável 'express'*/
const crypto = require('crypto');

/*Importa a conexão cmo o BD*/
const connection = require('./database/connection');

/*Desacopla o "módulo de rotas" do express em uma nova variável*/
const routes = express.Router();

/**Executa o método do protocolo HTTP. 
 * 
 * * Métodos HTTP:
*
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*
* Tipos de parâmetros
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* aplicável ao método GET! Código a ser utilizado:

const express = require('express');
const app = express();
app.get('/users', (request, response) => {
   const params = request.query;
   console.log(params);
   return response.json({
      Evento: 'Semana Omnistack 11.0',
      Aluno: 'Rodrigo Chiaradia',
      Trabalho: 'teletrabalho'
   });
});
app.listen(3333);

* Route Params: Parâmetros utlizados para identificar recursos
* aplicável ao método GET! Código a ser utilizado:

const express = require('express');
const app = express();
app.get('/users/:id', (request, response) => {
   const params = request.params;
   console.log(params);
   return response.json({
      Evento: 'Semana Omnistack 11.0',
      Aluno: 'Rodrigo Chiaradia',
      Trabalho: 'teletrabalho'
   });
});
app.listen(3333);

* Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
* aplicável ao método POST! Código a ser utilizado:

const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (request, response) => {
   const body = request.body;
   console.log(body);
   return response.json({
      Evento: 'Semana Omnistack 11.0',
      Aluno: 'Rodrigo Chiaradia',
      Trabalho: 'teletrabalho'
   });
});
app.listen(3333);
 
*/

/*Código da rota /ongs*/
routes.post('/ongs', (request, response) => {
   
   /** variável para guardar os dados enviados pela requisição POST (input dos dados da ONG).
    * A declaração de cada dado da variável ("name", "email", etc) ajuda a não receber dados indesejados.
    * A alternativa à uma lista como essa seria uma variável única (sem estar entre conlchetes), a qual também 
    * funcionaria, mas com o risco de receber dados que não sejam os que devem constar no cadastro da ONG. 
    */ 
   const {name, email, whatsapp, city, uf} = request.body;
   
   /** variável para gerar o id da ONG, a partir do pacote (dependência) "crypto". Gera um código aleatório de 
    * 4 bytes, e o converte para uma string em formato hexadecimal.
    */
   const id = crypto.randomBytes(4).toString('HEX');

   connection('ongs').insert({
      id,
      name,
      email,
      whataspp,
      city,
      uf,
   });
   
   console.log(data);
   
   return response.json();
});

/**
 * Deixa as rotas disponíveis para que a aplicação possa acessá-las no index.js.
 * Exporta as rotas para o index!
 */
module.exports = routes;