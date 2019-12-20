import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class EmployeeForm extends Component {
    state = {
        name: '',
       number: '',
    }
    onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('clientes', JSON.stringify(this.state));
        this.props.history.push('/Sidebar');
        //console.log(JSON.parse(localStorage.getItem('clientes')));
        //this.props.agregarClientes(this.state.name);
    }
    onChange = e => {
        // console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
            //[e.target.number]: e.target.value
        })
    }
    render(){
        //console.log(this.props);
        
        return(
            <form onSubmit={this.onSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={this.state.name} 
                        onChange={this.onChange}/>  <br />
                    <input
                        name="middle-name"
                        type="text" 
                        placeholder="Middle Name"
                        value={this.state.number} 
                        onChange={this.onChange}/> <br />
                    <input
                        name="last-name"
                        type="text" 
                        placeholder="Last Name"
                        value={this.state.number} 
                        onChange={this.onChange}/> <br />
                    <input
                        name="branch"
                        type="text" 
                        placeholder="Branch"
                        value={this.state.number} 
                        onChange={this.onChange}/>
                <br />
                <br />
                    <button> Registrar </button>
            </form>
        )
    }
}

export default withRouter(EmployeeForm);