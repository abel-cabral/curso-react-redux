import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';

// NOTE Configurando Redux
import { createStore } from 'redux'; // Cria a store redux
import { Provider } from 'react-redux'; // Component react que vai pegar o state e passar pro components internos
import rootReducer from './main/reducers';


// NOTE Incialização da store do redux, recebendo o rootReducers que criamos
const store = createStore(rootReducer);


if (typeof window !== 'undefined') {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('app')
    )
}

