import React from 'react';
import IconButton from '../template/iconButton';

// NOTE Responsavel por conectar nosso state e props do react com o redux
import { connect } from 'react-redux';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    {/* Arrow Function utilizada pois passamos
                    outro parametro que não é o evento.
                    Se fosse o evento, não seria necessário */}
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

// NOTE Mapeia o state com as props do react
const mapStateToProps = state => ({ // Recebemos o state do react e devolvemos um objeto
    list: state.todo.list // Vindo la do nosso rootReducer
});
//const mapDispatchToProps = dispatch => 

export default connect(mapStateToProps)(TodoList);