const INITIAL_STATE = {
  description: '',
  list: []
};

export default (state = INITIAL_STATE, action) => {
  // NOTE Recebe o state e o evolui em caso de mudança
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload };
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data };    
    case 'CLEAR_FORM':
      return { ...state, description: '' }; // Irá limpar a descrição após add um novo elemento
    default:
      return state;
  }
};
