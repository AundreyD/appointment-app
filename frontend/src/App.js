import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {New} from './New';
import {Search} from './Search';
import {Compose} from './Compose';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <New {...this.props}/>}
                  />
                  <Route
                    exact
                    path="/compose"
                    render={() => <Compose {...this.props}/>}
                  />
        </Switch>
        <Search />

        <BootstrapTable striped hover>
            <TableHeaderColumn isKey dataField='id'>Date</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Time</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Description</TableHeaderColumn>
        </BootstrapTable>,
      </div>
    );
  }
}

