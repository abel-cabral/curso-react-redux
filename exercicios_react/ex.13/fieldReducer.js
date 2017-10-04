// O estado deve ser evoluido através de funções puras
const INITIAL_STATE = {value: 'Opa'};

export default function (state = INITIAL_STATE, action) {
    /* Verifica o tipo da action, se estiver interessado
    altera o valor */
    switch (action.type) {
        case 'VALUE_CHANGED':
            return {value: action.payload};
        default:
            return state;
    };  
};