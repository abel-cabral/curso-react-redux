import axios from 'axios';
import {toastr} from 'react-redux-toastr';

import {reset as resetForm, initialize} from 'redux-form';
import {showTabs, selectTab} from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {credits: [{}], debts: [{}]};

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    };
};

const submit = (values, method) => dispatch => {
    const id = values._id ? values._id : '';
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.');
            dispatch(init());
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error));
        });
};

export const create = values => submit(values, 'post');
export const update = values => submit(values, 'put');
export const remove = values => submit(values, 'delete');

export const showUpdate = billingCycle => [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
];

export const showDelete = billingCycle => [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
];

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ];
};