import React, { Component, Fragment } from 'react';

import Header from '../Components/Header';
import Branches from '../Components/Branches'

export default class BranchesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            branches: [],
            path: [],
            isFetched: true,
        }
    }

    componentDidMount() {
        fetch("https://tryouts-cumplo.herokuapp.com/branches/")
            .then(response => response.json())
            .then(branchesJson => this.setState({branches: branchesJson.results}))
    }
    render() {
        console.log(this.state)
        // if(this.state.isFetched) {
        //     return 'Loading...'
        // }
        return(
            <Fragment>
                <Header />
                <div className="branch-card-container">
                    {this.state.branches.map((branch => <Branches name={branch.name} key={branch.id} bank={branch.bank}/>))}
                </div>
            </Fragment>
        )
        }
    }
    
