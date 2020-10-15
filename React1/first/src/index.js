import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import './index.css';

const history = createBrowserHistory();

ReactDom.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' render={() => <Header Component={App}/>}></Route>
            <Route path='/jokes' render={() => <Header Component={Jokes}/>}></Route>
        </Switch>
    </Router>,
    document.getElementById('root'));
