import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Table extends Component{
    
      
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