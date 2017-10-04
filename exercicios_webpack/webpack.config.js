const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Exporta um modulo
module.exports = {
    // A partir desse arquivo a aplicação será carregada
    entry: './ex/index.js',
    // Aonde a saida do arquivo javascript vai ser gerado
    output: {
        /*
        __dirname: variavel de ambiente disponibilizada pelo
        node que indica o diretório atual
        */
        path: __dirname + '/public',
        // Nome do arquivo gerádo pelo webpack
        filename: './bundle.js'
    },
    // Webpack Dev Server
    devServer: {
        // Porta do Servidor
        port: 8080,
        // Pasta Base onde estarão os arquivos que deverão ser carregados
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        // Carrega os arquivos
        loaders: [{
            /*
            Tipo do arquivo que deve ser carregado, nesse caso
            todos os arquivos que terminem com .js
            */ 
            test: /.js?$/,
            // Loader que deve ser usado
            loader: 'babel-loader',
            // Exclui arquivos ou pastas que não devem ser lidos
            exclude: /node_modules/,
            // O que eu quero que o loader interprete
            query: {
                presets: ['es2015', 'react'],
                // Plugin que será executado no babel
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    }
};