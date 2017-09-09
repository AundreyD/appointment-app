import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {AjaxCalls} from './ajax';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export class Search extends Component{

    render(){
        return(
            <Form inline>
                <FormGroup controlId="formInlineName">
                <ControlLabel>Search Parameters</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Description here" ref="search"/>
                </FormGroup>
                {' '}
                <Button type="submit">
                Search
                </Button>
            </Form>
        )
    }
}