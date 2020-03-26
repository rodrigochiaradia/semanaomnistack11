const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
app.get('/', (request, response) => {
    return response.json({
        Evento: 'Semana Omnistack 11.0',
        Aluno: 'Rodrigo Chiaradia',
        Trabalho: 'teletrabalho'
    });
});

app.listen(3333);
