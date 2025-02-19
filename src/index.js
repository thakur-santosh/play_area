import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import { startSetUser } from './action/users';

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startSetUser())

const ele =(
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
