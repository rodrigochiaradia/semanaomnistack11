const express = require('express');

const app = express();

/**
 * A linha 
 * --app.use(express.json());--
 * Avisa ao nosso app que estaremos utilizando json para o corpo das requisições
 * Converte o json em um objeto do Javascript
 * ATENÇÃO: deve vir antes das rotas!
 */
app.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utlizados para identificar recursos
  * Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        Evento: 'Semana Omnistack 11.0',
        Aluno: 'Rodrigo Chiaradia',
        Trabalho: 'presencial'
    });
});

app.listen(3333);
