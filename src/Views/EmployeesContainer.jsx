import React, { Component, Fragment } from 'react';

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
            
            // .then(data => {
            //     const employeesJson = data.results
            //     console.log(employeesJson)
            //     employeesJson.forEach(employee => {
            //         console.log(Array.from(employee))
            //         // if(employee.branch === 3){
            //         //     this.setState({employees: employee})
            //         // }
            //     })
            // console.log(this.state)
            // })
    };
    
    render() {
        // if(this.state.isFetched) {
        //     return 'Loading...'
        // }
        console.log(this.state.employees)

        return(
            <Fragment>
            {this.state.employees.map((employee) => {
                if(employee.branch ===1){
                return(<Employees name={employee.name} middleName={employee.middle_name} lastName={employee.last_name}key={employee.id}/>)
                }
            })
            }
             <EmployeeForm />
            </Fragment>
        )
    }
};