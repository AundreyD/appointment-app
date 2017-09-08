import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, Button, FormGroup, FormControl, Col, ControlLabel} from 'react-bootstrap';
import Datepicker from 'react-bootstrap-date-picker';
import TimePicker from 'react-bootstrap-time-picker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


export class Compose extends Component{
    render(){
        return(
            <div>
                <Form horizontal>
                    <Button type="submit">
                        Add
                    </Button>
                    <Link
                        className="btn btn-danger"
                        to="/"
                    >
                        Cancel
                    </Link>
                    <FormGroup controlId="formHorizontalDate">
                    <Col componentClass={ControlLabel} sm={2}>
                        Date
                    </Col>
                    <Col sm={10}>
                        <Datepicker />
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTime">
                    <Col componentClass={ControlLabel} sm={2}>
                        Time
                    </Col>
                    <Col sm={10}>
                        <TimePicker/>
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTime">
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                    </Col>
                    <Col sm={10}>
                        <FormControl type="input" placeholder="description" />
                    </Col>
                    </FormGroup>

                    
                </Form>
            </div>
        )
    }
}

