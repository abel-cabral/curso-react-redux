import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';

// NOTE Configurando Redux
import { createStore, applyMiddleware } from 'redux'; // Cria a store redux
import { Provider } from 'react-redux'; // Component react que vai pegar o state e passar pro components internos
import rootReducer from './main/reducers';

// NOTE Middlewares
import promise from 'redux-promise'; // Espera a promisse passada ser resolvida para assim disparar os reduncers
import multi from 'redux-multi'; // Retorna um array de actions, em paralelo nao ideal para assyncronas
import thunk from 'redux-thunk'; // Permite que possamos devolver um dispach assim podemos usar o then

// ANCHOR Bug window not defined
if (typeof window !== 'undefined') {
    // NOTE Inicializando ferramenta de depuraçao do redux
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;

    // NOTE Incialização da store do redux, recebendo o rootReducers que criamos
    const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer, devTools);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('app')
    )
}

