import React from 'react';
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';

import store from './components/store';
import App from './Todo_App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
);