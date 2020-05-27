const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


/** 
 * Metodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos De Parametros:
 * 
 * Query: Parâmetros nomeados enviados na rota, após  "?" (Filtros, paginação)
 * Route: Utilizados para identificar recursos
 * request Body: Corpo da requisição, utilizade para criar ou alterar recursos
 */

 /** 
  * utilizando SQL: SQLite
 */

 /**   
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */
 


