/*
Importa a classe Pessoa do arquivo
pessoa.js (usando o caminho relativo ./)
*/ 
import Pessoa from './pessoa';

const pessoa = new Pessoa('Guilherme');
console.log(pessoa.toString());