import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro, {Segundo} from './component';

ReactDOM.render(
    /*
    Só podemos retornar um componente no React,
    Se quisermos retornar 2 components, como no exemplo abaixo,
    precisamos retornar ele dentro de uma tag, ou seja
    um único component.
    */
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'));