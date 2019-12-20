import React, { Component } from 'react';

export default class BranchesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            branches: []
        }
    }

    componentDidMount() {
        fetch("https://tryouts-cumplo.herokuapp.com/branches/")
            .then(response => response.json())
            .then(branchesJson => this.setState({branches: branchesJson.results}))
    }
    render() {
        return(
            <div>
                <h1>Branches</h1>
            </div>
        )
        }
    }
    
