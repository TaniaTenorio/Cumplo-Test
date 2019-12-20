import React, { Component } from 'react';

import Branches from '../Components/Branches'

export default class BranchesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            branches: [],
            path: []
        }
    }

    componentDidMount() {
        fetch("https://tryouts-cumplo.herokuapp.com/branches/")
            .then(response => response.json())
            .then(branchesJson => this.setState({branches: branchesJson.results}))
    }
    render() {
        console.log(this.state)
        if(this.state.isFetched) {
            return 'Loading...'
        }
        return(
            this.state.branches.map((branch => <Branches name={branch.name} key={branch.id} bank={branch.bank}/>))
            //<Branches name="branch" />
        )
        }
    }
    
