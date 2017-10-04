export function changeValue(e) {
    return {
        // Tipo do Objeto (É obrigatório e deve ter o nome de type)
        type: 'VALUE_CHANGED',
        /*
        Dado que vem junto de uma ação (Valor Mudou).
        Temos uma ação (que é o VALOR MUDOU) e juntamente da 
        ação vem um valor novo (chamado aqui de payload).
        */
        payload: e.target.value
    };
};  