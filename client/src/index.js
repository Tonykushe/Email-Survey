import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import  rootReducer  from "./app/reducers/rootReducer";
import App from './app/layout/App';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, {}, applyMiddleware(thunk))
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
    , rootEl
);

