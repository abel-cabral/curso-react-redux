/* 
    ANCHOR Para evitar muito codigo no index.js usamos um js separado para declarar todos os 
    reducers, assim criando um rootReducer
*/
import { combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer';


// NOTE Combina todos os demais reducers e os passa como um unico obj para os demais components
const rootReducer = combineReducers({
  // Adicionamos nossos actions aqui
  todo: todoReducer
});

export default rootReducer;
