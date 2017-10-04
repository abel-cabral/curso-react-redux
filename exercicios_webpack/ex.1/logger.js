function info(text) {
    console.log(`INFO: ${text}`);
};

/*
No ES6 ao passar a propiedade de um objeto, não precisamos fazer
'info: info'
Passando somente 'info', isso já fica subentendido
*/
module.exports = {info};