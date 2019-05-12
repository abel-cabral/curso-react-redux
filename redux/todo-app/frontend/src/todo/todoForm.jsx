import React, { Component } from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

// NOTE Responsavel por conectar nosso state e props do react com o redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NOTE Importamos nossas actions criadas
import { changeDescription, search, add, cleanForm } from './todoActions';

// ANCHOR Componenete baseado em classe
export class TodoForm extends Component {
    constructor(props) {
        super(props)
        // NOTE Garante que o this chamado dentro do component aponte pra ele proprio
        this.keyHandler = this.keyHandler.bind(this);
    }

    // NOTE Um dos ciclos de vida do react
    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        // NOTE destructiorin extrai de um obj os atributos que desejamos 
        const { add, search, description, cleanForm } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            cleanForm();
        };
    };

    // NOTE Obrigatorio ter um render
    render() {
        // NOTE destructiorin extrai de um obj os atributos que desejamos 
        const { add, search, description, cleanForm, changeDescription } = this.props;
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa"
                        value={description}
                        onKeyUp={this.keyHandler}
                        onChange={changeDescription}></input>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus"
                        onClick={() => add(description)}></IconButton>
                    <IconButton style="info" icon="search"
                        onClick={() => search(description)} />
                    <IconButton style="default" icon="close"
                        onClick={() => cleanForm()} />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
});
// NOTE Dispara a ação e passa para todos os reducers. Nosso onChange se inscreve no changeDescription
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, cleanForm }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)