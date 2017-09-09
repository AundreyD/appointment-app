import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom';
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/index";
import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reduxImmutableStateInvariant()));


const history = createBrowserHistory();


ReactDOM.render(
   <div className="provider-area">
       <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/' component={App}  />
                </Switch>
            </Router>
        </Provider>
    </div>
    ,document.getElementById('root')

);
registerServiceWorker();
