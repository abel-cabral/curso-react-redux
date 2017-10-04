const restful = require('node-restful');
/* node-restful cria uma casca em cima do 
mongoose nos trazendo uma API Rest praticamente pronta */
const mongoose = restful.mongoose;

// Schema do banco
const todoSchema = new mongoose.Schema({
    /*
    Descrição da Tarefa
    type: tipo de dado esperado
    required: obrigatóriedade
    */
    description: {type: String, required: true},
    /*
    Se a tarefa esta concluida ou não
    Por padrão ja vem como false
    */
    done: {type: Boolean, required: true, default: false},
    /*
    Se a tarefa esta concluida ou não
    Por padrão ja cadastra a data atual
    */
    createdAt: {type: Date, default: Date.now}
});

module.exports = restful.model('Todo', todoSchema);