import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

// NOTE Responsavel por conectar nosso state e props do react com o redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NOTE Importamos nossas actions criadas
import { changeDescription } from './todoActions';

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape') {
            props.handleClear();
        };
    };

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input id="description" className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onKeyUp={keyHandler}
                    onChange={props.changeDescription}></input>
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus"
                    onClick={props.handleAdd}></IconButton>
                <IconButton style="info" icon="search"
                    onClick={props.handleSearch} />
                <IconButton style="default" icon="close"
                    onClick={props.handleClear} />
            </Grid>
        </div>
    );
}

const mapStateToProps = state => ({
    description: state.todo.description
});
// NOTE Dispara a ação e passa para todos os reducers. Nosso onChange se inscreve no changeDescription
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)