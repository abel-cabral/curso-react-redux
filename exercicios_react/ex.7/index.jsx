import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        {/* Será recebido dentro de {props.children} */}
        <Member name="Guilherme" lastName="Silva" />
    </Family>
, document.getElementById('app'));