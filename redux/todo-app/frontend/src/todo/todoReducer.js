const INITIAL_STATE = {
  description: 'Ler Livros',
  list: [
    {
      _id: 1,
      description: 'Pagar fatura do cartão',
      done: true
    },
    {
      _id: 2,
      description: 'Estudar Prograamação',
      done: false
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  // NOTE Recebe o state e o evolui em caso de mudança
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload };
    default:
      return state;
  }
};
