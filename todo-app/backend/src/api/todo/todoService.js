const Todo = require('./todo');

// Métodos disponiveis na API Rest
Todo.methods(['get', 'post', 'put', 'delete']);
/*
new: true - Retorna o registro atualizado
runValidators: true - Executa as validações do Schema
*/
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;