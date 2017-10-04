import React, {Component} from 'react';

/*
Normalmente utilizamos componentes de classe
quando precisamos de muitos metodos e estatos internos.
Ou seja, um componente mais complexo
*/
export default class ClassComponent extends Component {
    // Metodo obrigatório
    render() {
        return (
            <h1>{this.props.value}</h1>
        );
    };
};