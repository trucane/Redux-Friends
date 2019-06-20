import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Import all install dependencies
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';


const store = createStore(reducer);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

//1. import all install dependencies
//2. create store, add reducer as object
//3. wrap App in Provider pass in store as a prop