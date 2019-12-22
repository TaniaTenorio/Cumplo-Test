import React, { Component } from 'react';

import Header from '../Components/Header';
import SectionTitle from '../Components/SectionTitle';
import Employees from '../Components/Employees';
import EmployeeForm from '../Components/EmployeeForm';

export default class QuinnWileyContainer extends Component  {
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
            <div>
                <Header />
                <SectionTitle section="Quinn Wiley" />
            {this.state.employees.map((employee) => {
                if(employee.branch ===1){
                    const employeeTemplate = <Employees name={employee.name} middleName={employee.middle_name} lastName={employee.last_name}key={employee.id}/>
                    return employeeTemplate
                }
            })}
             <EmployeeForm />
            </div>
        )
    }
};