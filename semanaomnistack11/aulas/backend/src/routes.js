//Aciona a dependência (pacote/"aplicação") 'express' na variável 'express'
const express = require('express');

//Importa o controlador das rotas das Ongs
const OngController = require('./controllers/OngController');

//Importa o controlador das rotas dos Incidentes
const IncidentController = require('./controllers/IncidentController');

//Importa o controlador das rotas de listagem dos casos específicos de uma ONGs (Profile)
const ProfileController = require('./controllers/ProfileController');

//Desacopla o "módulo de rotas" do express em uma nova variável
const routes = express.Router();

//Códigos para as rotas - ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
//Códigos para as rotas - busca de caso específico de uma ONG
routes.get('/profile', ProfileController.index);
//Códigos para as rotas - casos(incidents)
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;




/** CÓDIGO MONTADO ATÉ O INÍCIO DOS DESDOBRAMENTOS DAS ROTAS EM OUTRAS PASTAS E ARQUIVOS 
 * (ANTES DO FINAL DA 2a AULA)*/


//Aciona a dependência (pacote/"aplicação") 'express' na variável 'express'
//const express = require('express');

//Aciona a dependência (pacote/"aplicação") 'crypto' na variável 'express'
//const crypto = require('crypto');

//Importa a conexão cmo o BD
//const connection = require('./database/connection');

//Desacopla o "módulo de rotas" do express em uma nova variável
//const routes = express.Router();

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

/**Código para exibir uma informação da rota "/ongs" a partir de um método GET.
 * A função "async" faz com que o código aguarde onde haja o comando "await". Isto se faz
 * necessário para que o programa aguarde a inserção dos valores no BD (linha "connection").
*/
//routes.get('/ongs', async (request, response) => {
   //Guarda na variável "ongs" todos os registros a serem capturados da tabela do BD 'ongs'
   //const ongs = await connection('ongs').select('*');

   //apresenta o array da variável "ongs" com  os registros capturados da tabela do BD 'ongs'
   //return response.json(ongs);
//});

/**Código para inserir criar uma informação na rota "/ongs" a partir de um método POST.
 * A função "async" faz com que o código aguarde onde haja o comando "await". Isto se faz
 * necessário para que o programa aguarde a inserção dos valores no BD (linha "connection").
*/
//routes.post('/ongs', async (request, response) => {
   //===============trecho de código migrado para ./controllers/OngController.js===============
   /** variável para guardar os dados enviados pela requisição POST (input dos dados da ONG).
    * A declaração de cada dado da variável ("name", "email", etc) ajuda a não receber dados indesejados.
    * A alternativa à uma lista como essa seria uma variável única (sem estar entre conlchetes), a qual também 
    * funcionaria, mas com o risco de receber dados que não sejam os que devem constar no cadastro da ONG. 
    */ 
   
   // const {name, email, whatsapp, city, uf} = request.body;
   
   /** variável para gerar o id da ONG, a partir do pacote (dependência) "crypto". Gera um código aleatório de 
    * 4 bytes, e o converte para uma string em formato hexadecimal.
    */

   //const id = crypto.randomBytes(4).toString('HEX');

   //Conecta à tabela 'ongs' do BD e insere os dados da mesma
      
      /*await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
   })*/
   
   /** Código para verificar no console eventuais mensagens derivadas a partir do comando anterior:
    * console.log(data);*/
   
   //return response.json({ id });

   //===============trecho de código migrado para ./controllers/OngController.js===============
//});

/**
 * Deixa as rotas disponíveis para que a aplicação possa acessá-las no index.js.
 * Exporta as rotas para o index!
 */
//module.exports = routes;