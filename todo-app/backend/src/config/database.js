// Conexão com o MongoDB e mapeamento dos objetos
const mongoose = require('mongoose');

/* Configuração para usar a API de Promise 
do próprio NodeJS (Remover Mensagem de Advertência) */
mongoose.Promise = global.Promise;

// Criando conexão com o banco
module.exports = mongoose.connect('mongodb://mongo:27017/todo');