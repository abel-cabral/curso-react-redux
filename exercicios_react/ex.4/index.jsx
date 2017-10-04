import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

/*
Ao instanciar o component, podemos setar as propiedades.
Estas são acessadas através do parametro props no componente
*/
ReactDOM.render(<Component value="Show!" />, document.getElementById('app'));