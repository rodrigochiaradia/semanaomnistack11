/*Aciona a dependência ("aplicação") 'express' na variável 'express'*/
const express = require('express');

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

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        Evento: 'Semana Omnistack 11.0',
        Aluno: 'Rodrigo Chiaradia',
        Trabalho: 'online'
    });
});

/**
 * Deixa as rotas disponíveis para que a aplicação possa acessá-las no index.js.
 * Exporta as rotas para o index!
 */
module.exports = routes;