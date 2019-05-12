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

/*
  NOTE Acessa diretamente o valor na props e o passa para a requisição, 
  nao precisamos nos preocupar com promise do redux 
*/
export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(URL + '?sort=-createdAt' + search).then(response =>
      dispatch({
        type: 'TODO_SEARCHED',
        payload: response.data
      })
    );
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
  return [
    {
      type: 'CLEAR_FORM'
    },
    search()
  ];
};
