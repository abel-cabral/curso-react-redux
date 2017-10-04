import React, {Component} from 'react';

export default class ClassComponent extends Component {
    constructor(props){
        // Deve ser chamada obrigatóriamente
        super(props);
        /*
        Os dados recebidos em props, servem somente como
        leitura, por isso, utilizamos o this.state para
        alterar o estado de um componente.
        Nesse caso, ele recebe o seu value da propiedade
        'initialValue'
        */
        this.state = {value: props.initialValue}
    };

    sum(delta) {
        /*
        No React, sempre que queremos alterar um dado, chamamos o
        metodo this.setState() (que é herdado de Component).
        Seguindo o paradigma da programação funcional, o dado
        deve ser imutável, ou seja, manter um rastro de suas
        alterações.
        Quando querermos ler esse dado, utilizamos o this.state.value;
        */
        this.setState({value: this.state.value + delta});
    };
    
    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                {/* 
                Utilizamos uma arrow function, pois se chamarmos
                a função diretamente a mesma vai atribuir ao onClick
                o retorno da função, que será 'undefined'.
                Por isso utilizamos uma função que retorna o metodo 
                */}
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(+1)}>Inc</button>
            </div>
        );
    };
};