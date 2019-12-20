import React from 'react';
import { Link } from 'react-router-dom';

function Banks(props) {
    return(
        <div className="bank-card">
            <h1>Bank: </h1>
            <p>{props.name}</p>
            <Link to="/branches">Info</Link>
        </div>
    )
}

export default Banks;