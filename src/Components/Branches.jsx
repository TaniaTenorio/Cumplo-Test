import React from 'react';
import { Link } from 'react-router-dom';

function Branches(props) {
    return(
        <div className="branch-card">
            <h1>Branch:</h1>
            <p>{props.name}</p>
            <p>Bank: {props.bank}</p>
            <Link to="/employees">Employees</Link>
        </div>
    )
}

export default Branches;