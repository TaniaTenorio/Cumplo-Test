import React, { Component, Fragment } from 'react';

import Header from '../Components/Header';
import Employees from '../Components/Employees';
import EmployeeForm from '../Components/EmployeeForm';

export default class EmployeesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        fetch("https://tryouts-cumplo.herokuapp.com/employees/")
            .then(response => response.json())
            .then(employeesJson => this.setState({employees: employeesJson.results}))
    };
    
    render() {
        // if(this.state.isFetched) {
        //     return 'Loading...'
        // }
        console.log(this.state.employees)

        return(
            <Fragment>
                <Header />
            {this.state.employees.map((employee) => <Employees name={employee.name} middleName={employee.middle_name} lastName={employee.last_name}key={employee.id}/>)}
             <EmployeeForm />
            </Fragment>
        )
    }
};