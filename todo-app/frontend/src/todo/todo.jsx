import React, {Component} from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos'

/*
O componente Todo será responsável por todo o estado
da aplicação, pois é mais simples de espalhar esse estado
para todos os outros componentes (usando Redux esse cenário muda)
*/
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {description: '', list: []};
        
        // Faz um bind para não perder o contexto do this
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    
        this.refresh();
    };

    // Método responsável por trazer a lista atualizada
    refresh(description = '') {
        /*
        Se a descrição for valida adiciona o parametro na URL do GET
        caso contrário, deixa vazio
        */
        const search = description ? `&description__regex=/${description}/` : '';
        
        /*
        1 - Faz um GET organizando por data de criação
        2 - Utiliza a descrição informada (para manter a descrição no input
        devemos passar o estado)
        3 - Preenche a lista com todas as tarefas criadas no Banco
        */
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    };

    // Método responsável por adicionar uma nova todo
    handleAdd() {
        const description = this.state.description;

        /*
        1 - Faz um POST enviando a descrição
        2 - Faz um refresh usando o método refresh
        */
        axios.post(URL, {description})
            .then(resp => this.refresh());
    };

    // Método responsável por atualizar o state  
    handleChange(e) {
        // Seta o State da descrição baseada no valor do input
        this.setState({...this.state, description: e.target.value})
    };

    // Método responsável por remover um todo
    handleRemove(todo) {
        /*
        1 - Faz um DELETE utilizando o ID da TODO
        2 - Faz um refresh usando o método refresh
        */
        axios.delete(`${URL}/${todo._id}`)
            .then(result => this.refresh(this.state.description))
    };

    // Método responsável por marcar um todo como feito
    handleMarkAsDone(todo) {
        /*
        1 - Faz um PUT utilizando o ID e passando o done como true
        2 - Faz um refresh utilizando o método refresh
        */
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(result => this.refresh(this.state.description))
    };

    // Método responsável por marcar um todo como não feito
    handleMarkAsPending(todo) {
        /*
        1 - Faz um PUT utilizando o ID e passando o done como false
        2 - Faz um refresh utilizando o método refresh
        */
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(result => this.refresh(this.state.description))
    };

    // Método responsável pela busca de todos especificas
    handleSearch() {
        this.refresh(this.state.description);
    };

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                description={this.state.description}
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}/>
                <TodoList 
                list={this.state.list}
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending}/>
            </div>
        );
    };
}