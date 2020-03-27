/*Aciona a dependência ("aplicação") 'express' na variável 'express'*/
const express = require('express');

/**
 * Importa as rotas do arquivo 'routes.js' para o index.js. No comando 'require', o parâmetro
 * (texto dentro das aspas simples) dentro dos parênteses é interpretado como um pacote,
 * a não ser que seja precedido  de './', que indica ao comando que se trata de um arquivo.
 * CAMINHOS RELATIVOS:
 * ./  --> referencia a mesma pasta do arquivo
 * ../ --> referencia que se deve coltar uma pasta
 */
const routes = require('./routes');

/*Inicializa o app*/
const app = express();

/**
 * Avisa ao nosso app que estaremos utilizando json para o corpo das requisições
 * Converte o json em um objeto do Javascript
 * ATENÇÃO: deve vir antes das rotas!
 */
app.use(express.json());

/**
 * Inicializa o app a partir de uma rota
 * Precisa estar após o código de conversão do json em Javascript!
 */
app.use(routes);

/*Utilização da porta 3333 para a aplicação*/
app.listen(3333);
