import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export class New extends Component{
    render(){
        return(
            <div>
                <Link
                    className="btn btn-success"
                    to="/compose"
                >
                    New
                </Link>
            </div>
        )
    }
}