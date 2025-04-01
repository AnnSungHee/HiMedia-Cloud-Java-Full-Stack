import React from 'react';
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';

import store from './02_store';
import App from './04_App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>,
);