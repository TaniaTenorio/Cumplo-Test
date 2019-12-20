import React, { Component } from 'react';

import Banks from '../Components/Banks';

export default class BanksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banks: [],
            isFetched: true,
        }
    }

    componentDidMount() {
        fetch('https://tryouts-cumplo.herokuapp.com/banks/')
            .then(response => response.json())
            .then(banksJson => this.setState({banks: banksJson, isFetched: false}))
    }
    
    render() {
        if(this.state.isFetched) {
            return 'Loading...'
        }
        //const bankName = this.state.banks[0].name;
        // console.log(bankName);
        return (
            this.state.banks.map(((bank) => <Banks name={bank.name} key={bank.pk}/>))
        )    
}
}