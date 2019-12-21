import React, { Component } from 'react';

import Header from '../Components/Header';
import SectionTitle from '../Components/SectionTitle';
import EmployeesContainer from './EmployeesContainer';

export default class QuinnWileyContainer extends Component  {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <section>
                <Header />
                <SectionTitle section="Quinn Wiley" />
                <EmployeesContainer />
            </section>
        )
    }
    
}

