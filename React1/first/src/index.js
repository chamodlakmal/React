import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';

const history = createBrowserHistory();

ReactDom.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' component={App}></Route>
            <Route path='/jokes' component={Jokes}></Route>
        </Switch>
    </Router>,
    document.getElementById('root'));
