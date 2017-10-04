/**
 * Esse arquivo que concentra todos os reducers
 * da aplicação
 */

// Combina os reducers
import {combineReducers} from 'redux';

import todoReducer from '../todo/todoReducer';

// Reducer que combina todos os outros reducers
const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;