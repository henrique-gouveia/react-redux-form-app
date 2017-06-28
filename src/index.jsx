import React from 'react'
import ReactDOM from 'react-dom'
import { reducer as form } from 'redux-form'

import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app2'
import app from './main/app-reducer'

const reducers = combineReducers({
    app,
    form
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))