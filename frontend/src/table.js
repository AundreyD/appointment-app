import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {AjaxCalls} from './ajax';


export const Row = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.Date}</td>
                <td>{this.props.Time}</td>
                <td>{this.props.Desc}</td>
            </tr>
        );
    }
});
