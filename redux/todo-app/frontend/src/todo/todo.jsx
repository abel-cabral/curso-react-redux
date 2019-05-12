import React, { Component } from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

/*
    ANCHOR O componente Todo será responsável por todo o estado
    da aplicação, pois é mais simples de espalhar esse estado
    para todos os outros componentes (usando Redux esse cenário muda)
*/
export default class Todo extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        );
    };
}