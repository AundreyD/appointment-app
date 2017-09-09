import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, FormGroup, FormControl, Col, ControlLabel} from 'react-bootstrap';
import Datepicker from 'react-bootstrap-date-picker';
import TimePicker from 'react-bootstrap-time-picker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios';
import PropTypes from "prop-types";


export class Compose extends Component{
    constructor(){
        super()
        this.now = this.formatDate();
        this.myTime = '';
    }

    static contextTypes = {
        router: PropTypes.object
    }

    componentWillReceiveProps(nextProps){
        console.log('nextprops',nextProps)
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

    postAppointment(date, time, desc ){
        axios.post('http://localhost:8000/api/appointment/',{
            date: date,
            time: time,
            description: desc
        })
    }

    handleClick(e){
        this.postAppointment(this.props.date, this.myTime, this.props.desc)
        this.props.history.push('/')
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

    pushDate(){
        var hiddenInputElement = document.getElementById("example-datepicker")
        let date = hiddenInputElement.value.split('T')[0];
        this.props.setDate(date)
    }

    pushDescription(){
        var desc = document.getElementById("desc")
        let descrip = desc.value
        console.log(descrip);
        this.props.setDesc(descrip)
    }

    pushTime(e){
        let date = new Date(null);
        date.setSeconds(e); // specify value for SECONDS here
        this.myTime = date.toISOString().substr(11, 8);
        this.props.setTime(this.myTime)
    }

    handleChange(e){
        
    }

    buttonStatus(){
        return this.props.time && this.props.date !== undefined && this.props.desc.length > 1  ? '' : 'disabled'
    }

    dateStatus(){
        return this.props.date !== undefined ? this.props.date : this.myTime
    }

    timeStatus(){

    }

    render(){
        let status = this.buttonStatus();
        // let dateValue = this.dateStatus();
        console.log('date', this.props.date)
        console.log('today', this.now)
        const today = this.now
        return(
           
            <div>
                <Form horizontal>
                    <Button 
                    className={status}
                    onClick={this.handleClick.bind(this)}>
                        Add
                    </Button>
                    <Link
                        className="btn btn-danger"
                        to="/"
                    >
                        Cancel
                    </Link>
                    <FormGroup controlId="formHorizontalDate" >
                    <Col componentClass={ControlLabel} sm={2} >
                        Date
                    </Col>
                    <Col sm={10}>
                        <Datepicker  id="example-datepicker" value={this.props.date} minDate={today} onBlur={this.pushDate.bind(this)}/>
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTime">
                    <Col componentClass={ControlLabel} sm={2} >
                        Time
                    </Col>
                    <Col sm={10}>
                        <TimePicker id="time" onChange={this.pushTime.bind(this)}/>
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTime">
                    <Col componentClass={ControlLabel} sm={2} >
                        Description
                    </Col>
                    <Col sm={10}>
                        <FormControl id='desc' type="input" placeholder="description"  onChange={this.pushDescription.bind(this)} />
                    </Col>
                    </FormGroup>

                    
                </Form>
            </div>
        )
    }
}

