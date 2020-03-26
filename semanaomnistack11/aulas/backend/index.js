const express = require('express');

const app = express();

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
