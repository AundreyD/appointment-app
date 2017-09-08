import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom';

const history = createBrowserHistory();


ReactDOM.render(
   
    <Router history={history}>
        <Switch>
            <Route path='/' component={App}  />
        </Switch>
    </Router>

    , document.getElementById('root')

);
registerServiceWorker();
