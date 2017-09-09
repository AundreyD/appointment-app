import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, handleAddRow} from 'react-bootstrap-table';
import {New} from './New';
import {Search} from './Search';
import {Compose} from './Compose';
import {Table} from './Table';
import {setDate, setDesc, setTime, setTableRows} from './redux/actions/actions';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios';



export class App extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.getAppointments()
    this.props.setDate(this.formatDate())
    this.props.setTime('00:00')
    this.props.setDesc('')
  }
  formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  getAppointments(){
    axios.get('http://localhost:8000/api/appointment/').then((response) => {
        this.props.setTableRows(response.data) 
      })
      .catch((error) => {
        alert(error);
      });
  }
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Appointmentz</h2>
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" render={() => <New {...this.props}/>} />
            <Route exact path="/compose" render={() => <Compose {...this.props}/>} />
          </Switch>
          <Table {...this.props} info={this.props.tableRows}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.info.date,
    desc: state.info.desc,
    time: state.info.time,
    tableRows: state.info.tableRows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setDate: (date) => {
          dispatch(setDate(date));
      },

      setTime: (time) => {
          dispatch(setTime(time));
      },

      setDesc: (desc) => {
        dispatch(setDesc(desc))
      },

      setTableRows: (arr) => {
        dispatch(setTableRows(arr))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);