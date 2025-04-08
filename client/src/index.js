import React from 'react';

import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';

import App from './App';
import './index.css'
import reducers from './reducers';

const store = configureStore(reducers, compose(applyMiddleware(thunk)))

createRoot(
    document.getElementById('root')
).render(
    <Provider store={store}>
        <App />
    </Provider>,

)
