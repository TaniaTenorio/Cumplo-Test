import React, { Component } from 'react';

import Header from '../Components/Header';
import SectionTitle from '../Components/SectionTitle';
import Employees from '../Components/Employees';
import EmployeeForm from '../Components/EmployeeForm';
import EmployeesContainer from '../Views/EmployeesContainer';

export default class HedleyToddContainer extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        fetch("https://tryouts-cumplo.herokuapp.com/employees/?")
            .then(response => response.json())
            .then(employeesJson => this.setState({employees: employeesJson.results}))
        //console.log(this.state)
    };

    pageForward = () => {
        fetch('https://tryouts-cumplo.herokuapp.com/employees/?page=2')
            .then(response => response.json())
            .then(employeesJson => {
                const newEmployees = employeesJson.results;
                // console.log(newEmployees)
                this.setState({employees:  newEmployees})
                console.log(this.state)
            })
            console.log(this.state);
        
    }

    render() {
        return(
            <div>
                <Header />
                <SectionTitle section="Hedley Todd" />
                <EmployeesContainer onClick={this.pageForward}/>
            {this.state.employees.map((employee) => {
                if(employee.branch === 3){
                    const employeeTemplate = <Employees name={employee.name} middleName={employee.middle_name} lastName={employee.last_name}key={employee.id}/>
                    return employeeTemplate
                }
            })}
             <EmployeeForm post={this.postData}/>
            </div>
        )
    }
};