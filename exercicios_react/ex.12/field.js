import React, {Component} from 'react';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.initialValue};
        /*
        Configuramos o bind pois no contexto do onChange,
        o this é atribuito a ele, e não a classe Field
        */
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <div>
                <label>{this.state.value}</label>
                {/*
                Não precisamos retornar uma Arrow Function pois no caso do onChange, 
                ele já espera uma função como parametro.
                */}
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        );
    };
};

export default Field;