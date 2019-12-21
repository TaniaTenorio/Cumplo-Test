import React from 'react';
import { Link } from 'react-router-dom';

function Branches(props) {
    return(
        <div className="branch-card">
            <h1>{props.name}</h1>
            <p>Bank: {props.bank}</p>
            <Link to={props.href}>Employees</Link>
        </div>
    )
}

export default Branches;