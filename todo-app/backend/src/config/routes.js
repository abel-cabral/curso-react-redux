const express = require('express');

module.exports = function(server) {
    // API Routes
    const router = express.Router();
    // Para todas as URL's que começam a partir de /api sera usado o router do express
    server.use('/api', router);

    // TODO Routes
    const todoService = require('../api/todo/todoService');
    /* Método register (metodo do node-restful) usa todos os metodos 
    declarados no Todo.methods.
    Usa a url /todos como base do Web Service */
    todoService.register(router, '/todos');
};