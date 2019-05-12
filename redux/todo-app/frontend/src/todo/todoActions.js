/*
    ANCHOR Vão retornar objs que representam a label da action clicada.
    Esse método apenas cria eventos
*/
import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

// NOTE Quando há mudança no input
export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED', // type é obrigatório
  payload: event.target.value // Esse é opcional, mas estou retornando o valor alterado
});

export const search = (description = '') => {
  const request = axios.get(`${URL}?sort=-createdAt${description}`);
  return {
    type: 'TODO_SEARCHED',
    payload: request // NOTE Retornamos a funcao asyncrona, precisa de middleware
  };
};

// NOTE Middleware multi e thunk
export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(response =>
        dispatch({
          type: 'TODO_ADDED',
          payload: response.data
        })
      )
      .then(() => dispatch(cleanForm()))
      .then(() => dispatch(search()));
  };
};

export const done = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() =>
        dispatch({
          type: 'IS_DONE'
        })
      )
      .then(() => dispatch(search()));
  };
};

export const pending = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() =>
        dispatch({
          type: 'IS_PENDING'
        })
      )
      .then(() => dispatch(search()));
  };
};

export const remove = todo => {
  return dispatch => {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(() =>
        dispatch({
          type: 'IS_DELETED'
        })
      )
      .then(() => dispatch(search()));
  };
};

export const cleanForm = () => {
  return {
    type: 'CLEAR_FORM'
  };
};
