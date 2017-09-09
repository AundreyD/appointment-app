import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn, handleAddRow} from 'react-bootstrap-table';

export class Table extends Component{
    constructor(props){
        super(props)
        
      }
      
    render(){
        return(
            <div>
            <BootstrapTable striped hover data={ this.props.info } search searchPlaceholder='Search Here'>
                <TableHeaderColumn  dataField='date' isKey> Date</TableHeaderColumn>
                <TableHeaderColumn dataField='time'>Time</TableHeaderColumn>
                <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
            </BootstrapTable>
            </div>
        )
    }
   
}