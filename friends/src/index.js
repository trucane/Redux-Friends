import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//1. Import all install dependencies
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';


//2. create store, add reducer as object
//6. create middleware and pass logger and thunk objects
const middleware = applyMiddleware(logger, thunk)
const store = createStore(reducer, middleware);




//3. wrap App in Provider pass in store as a prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


//4. Create reducers folder, and index.js file.
//5. create a state object and an export reducer function.
//7. Creat Login form
//8 create actions
//9 create reducers
//10. Test login
//11 Fetch data
//12 Create Friends component