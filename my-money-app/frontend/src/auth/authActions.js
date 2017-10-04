import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../consts';

export const login = values => submit(values, `${consts.OAPI_URL}/login`);
export const signup = values => submit(values, `${consts.OAPI_URL}/signup`);
export const logout = () => ({type: 'TOKEN_VALIDATED', payload: false});
export const validateToken = token => dispatch => {
    if (token) {
        axios.post(`${consts.OAPI_URL}/validateToken`, {token})
            .then(resp => {
                dispatch({type: 'TOKEN_VALIDATED', payload: resp.data.valid});
            })
            .catch(e => dispatch({type: 'TOKEN_VALIDATED', payload}));
    } else {
        dispatch({type: 'TOKEN_VALIDATED', payload});
    };
};

const submit = (values, url) => {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    {type: 'USER_FETCHED', payload: resp.data}
                ]);
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error));
            });
    };
};