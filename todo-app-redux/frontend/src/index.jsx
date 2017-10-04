import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

// Middlewares do Redux
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import App from './main/app';
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__();

// Cria o estado único da aplicação
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);

ReactDOM.render(
    /**
     * O Provider envolve toda a aplicação para
     * passar o estado único
     */
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));