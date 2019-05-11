import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';

if (typeof window !== 'undefined') {
    ReactDOM.render(<App />, document.getElementById('app'))
}