import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, handleAddRow} from 'react-bootstrap-table';
import {New} from './New';
import {Search} from './Search';
import {Compose} from './Compose';
import {Table} from './Table';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios';



export default class App extends Component {
  constructor(props){
    super(props)
    this.fakeData = [];
  }
  componentWillMount(){
    //this.setState(this.fakeData)
    // this.addRow()
    //console.log(this.fakeData)
    
    this.getAppointments()
  }

  getAppointments(){
    axios.get('http://localhost:8000/api/appointment/').then(function (response) {
      
        console.log(response.data);
        console.log(this)
        this.fakeData = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}
  addRow(){
    var fakeRow = {
      id: 10,
      name: 'Product one',
      price: 240
    };
    // insert a new row
    var result = this.refs.table.handleAddRowAtBegin(fakeRow);   // this.refs.table is a ref for BootstrapTable
    if (result){  // some error happen, ex: doesn't assign row key or row key duplicated
      console.log(result);
    }
  }
  
  render() {
    const fakeData = this.fakeData
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
        {/* <Search /> */}
      <Table {...this.props} info={this.fakeData}/>
      </div>
    );
  }
}

