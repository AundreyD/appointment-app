import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {AjaxCalls} from './ajax';


export const Row = React.createClass({
    render(){
        return (
            <tr>
                <td>{hello}</td>
                <td>{this.props.Time}</td>
                <td>{this.props.Desc}</td>
            </tr>
        );
    }
});
