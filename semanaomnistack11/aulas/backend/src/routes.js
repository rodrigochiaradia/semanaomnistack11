/*Aciona a dependência ("aplicação") 'express' na variável 'express'*/
const express = require('express');

/*Desacopla o "módulo de rotas" do express em uma nova variável*/
const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        Evento: 'Semana Omnistack 11.0',
        Aluno: 'Rodrigo Chiaradia',
        Trabalho: 'teletrabalho'
    });
});

/**
 * Deixa as rotas disponíveis para que a aplicação possa acessá-las no index.js.
 * Exporta as rotas para o index!
 */
module.exports = routes;