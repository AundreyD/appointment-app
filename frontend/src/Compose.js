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
        e.preventDefault()
        var hiddenInputElement = document.getElementById("example-datepicker")
        let date = hiddenInputElement.value.split('T')[0];
        console.log(date);
        //console.log(this)
        //console.log(this.now)
        var time= document.getElementById("time")
        let timee = time.value
        console.log(timee);

        var desc = document.getElementById("desc")
        let descrip = desc.value
        console.log(descrip);

        this.setState({
            time: this.myTime,
            date: date,
            desc: descrip
        }
        )
        console.log(this)
        this.postAppointment(date, this.myTime, descrip)
        this.props.history.push('/')
    }

    handleChange(e){
        //this.myTime = new Date(e).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
       // console.log(this.myTime)
        let date = new Date(null);
        date.setSeconds(e); // specify value for SECONDS here
        this.myTime = date.toISOString().substr(11, 8);
        // console.log(result)
    }
   

    render(){
        let status = '';
        return(
           
            <div>
                <Form horizontal>
                    <Button 
                    
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
                        <Datepicker  id="example-datepicker" value={this.now} minDate={this.now} />
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTime">
                    <Col componentClass={ControlLabel} sm={2} >
                        Time
                    </Col>
                    <Col sm={10}>
                        <TimePicker id="time" onChange={this.handleChange.bind(this)}/>
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTime">
                    <Col componentClass={ControlLabel} sm={2} >
                        Description
                    </Col>
                    <Col sm={10}>
                        <FormControl id='desc' type="input" placeholder="description"  inputRef={ref => { this.input = ref; }}  />
                    </Col>
                    </FormGroup>

                    
                </Form>
            </div>
        )
    }
}

