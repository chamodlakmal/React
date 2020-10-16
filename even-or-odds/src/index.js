import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


const DEFAULT_SETTING = {
    gameStarted: false,
    instructionsExpanded: false
};

const rootReducer = (state, action) => {
    console.log('state', action, ' action', action);

    if (action.type === 'SET_GAME_STARTED') {
        return {
            gameStarted: action.gameStarted,
            instructionsExpanded: false
        }
    }
    return DEFAULT_SETTING;
};

const store = createStore(rootReducer);
console.log('store', store);

const action1 = {gameStarted: true, type: 'SET_GAME_STARTED'};

store.dispatch(action1);


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
