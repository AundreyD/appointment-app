import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, Link } from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, handleAddRow} from 'react-bootstrap-table';
import {New} from './New';
import {Search} from './Search';
import {Compose} from './Compose';
import {Table} from './Table';
import {setDate, setDesc, setTime, setTableRows, setAlertVisible} from './redux/actions/actions';
import {connect} from 'react-redux';
import {Alert, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';


export class App extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.getAppointments()
    this.props.setDate(this.formatDate())
    this.props.setTime('00:00')
    this.props.setDesc('')
    this.props.setAlertVisible(false)
    if(this.props.location.pathname !== '/'){
      window.location.href = '/'
    }
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

  componentWillReceiveProps(){
    this.getAppointments()
  }

  getAppointments(){
    axios.get('http://localhost:8000/api/appointment/').then((response) => {
        this.props.setTableRows(response.data) 
      })
      .catch((error) => {
        alert(error);
      });
  }

  handleAlertDismiss() {
    this.props.setAlertVisible(false);
  }
  
  
  render() {
    let alertTrigger = this.props.alertVisible ?  
      <Alert bsStyle="danger" className={'alert'} onDismiss={this.handleAlertDismiss.bind(this)}>
      <h1>YOU DID SOMETHING WRONG</h1>
      <h4>THIS ERROR IS SHOWING BECAUSE YOU DIDN'T SELECT A DATE OR A TIME</h4>
      <p>CLOSE THIS AND TRY AGAIN</p>
      <p>
        <Button onClick={this.handleAlertDismiss.bind(this)}>CLOSE ALERT</Button>
      </p>
    </Alert> : '';
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>Appointmentz</h2>
         {alertTrigger}
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
    tableRows: state.info.tableRows,
    alertVisible: state.info.alertVisible
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
      },
      setAlertVisible: (status) => {
        dispatch(setAlertVisible(status))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);