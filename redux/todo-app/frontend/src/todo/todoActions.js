/*
    ANCHOR Vão retornar objs que representam a label da action clicada.
    Esse método apenas cria eventos
*/

// NOTE Quando há mudança no input
export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED', // type é obrigatório
  payload: event.target.value // Esse é opcional, mas estou retornando o valor alterado
});



