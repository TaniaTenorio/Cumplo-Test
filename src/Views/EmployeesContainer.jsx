import React, { Component } from 'react';

export default class EmployeesContainer extends Component {
    
    
    render() {
        
        return(
            <div className="employees-container">
                <h3>Employees</h3>
                <button onClick={this.props.onClick}>Next page</button>
            </div>
        )
    }
};