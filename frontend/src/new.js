import React, { Component } from 'react';
import {Link} from 'react-router'
export class New extends Component{
    render(){
        return(
            <div>
                <Link
                    to="/home"
                >
                    New
                </Link>
            </div>
        )
    }
}