import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from "react-redux";

const store = createStore(rootReducer);
console.log('store', store.getState());
const action1 = {gameStarted: true, type: 'SET_GAME_STARTED'};

store.dispatch(action1);

console.log('store', store.getState());


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
