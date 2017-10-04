import React from 'react';
import ReactDOM from 'react-dom';
/*
combineReducers: Cada atributo do store é controlado por um reducer.
O combineReducers vai combinar cada reducer (funções puras), apontando cada um
para seu respectivo objeto
createStore: Serve para criar stores (estado unico da aplicação)
*/
import {combineReducers, createStore} from 'redux';
// Componente que passa o estado para os componentes internos
import {Provider} from 'react-redux';

import Field from './field';
import fieldReducer from './fieldReducer';

const reducers = combineReducers({
    field: fieldReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
, document.getElementById('app'));