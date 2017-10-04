const mongoose = require('mongoose');
/**
 * Para evitar erros no console.
 * A API de Promise do Mongoose será descontinuada,
 * por isso, estamos referenciando o método Promise para
 * o objeto global do NodeJS
 */
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney');

mongoose.Error.messages.general.required = 
    "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'";
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'";
mongoose.Error.messages.Number.enum = 
    "O '{VALUE}' não é válido para o atributo '{PATH}'";