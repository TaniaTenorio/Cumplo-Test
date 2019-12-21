import React, { Component } from 'react';


const validate = values => {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
    const errors = {};
    console.log(values);
    if(!values.name){
        errors.name = 'This field is required'
    } else if (!regex.test(values.name)){
        errors.name = 'Special characters not accepted. Only accents and spaces'
    }
    if(!values.lastName){
        errors.lastName = 'This field is required'
    } else if (!regex.test(values.lastName)){
        errors.lastName = 'Special characters not accepted. Only accents and spaces'
    }
    if(!values.branch){
        errors.branch = 'This field is required'
    } 
    // else if (!regex.test(values.branch)){
    //     errors.branch = 'Special characters not accepted. Only accents and spaces'
    // }
    return errors;
}
export default class EmployeeForm extends Component {
    state = {
        errors: {}
    }
    onSubmit = e => {
        e.preventDefault();
        const{ errors, ...noErrors } = this.state;
        const result = validate(noErrors);
        this.setState({ errors: result })
        if(!Object.keys(result).length){
            console.log("Succeed, new employee registered")
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            //[e.target.number]: e.target.value
        })
    }
    render(){
        //console.log(this.props);
        const { errors } = this.state;
        return(
            <div className="form-container">
                <h1>Register new employee</h1>
                <form onSubmit={this.onSubmit}>
                        <input
                            className="form-input"
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={this.onChange}
                            />  <br />
                        {errors.name && <p>{errors.name}</p>}
                        <input
                            className="form-input"
                            name="middleName"
                            type="text" 
                            placeholder="Middle Name"
                            value={this.state.middleName} 
                            onChange={this.onChange}
                            /> <br />
                        {errors.middleName && <p>{errors.middleName}</p>}
                        <input
                            className="form-input"
                            name="lastName"
                            type="text" 
                            placeholder="Last Name"
                            value={this.state.lastName} 
                            onChange={this.onChange}/> <br />
                        {errors.lastName && <p>{errors.lastName}</p>}
                        <input
                            className="form-input"
                            name="branch"
                            type="text" 
                            placeholder="Branch"
                            value={this.state.branch} 
                            onChange={this.onChange}
                            />
                        {errors.branch && <p>{errors.branch}</p>}
                    <br />
                    <br />
                        <input 
                        className="form-input"
                        type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

