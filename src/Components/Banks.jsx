import React from 'react';
import { Link } from 'react-router-dom';

function Banks(props) {
    return(
        <div>
            <h1>Bank: {props.name}</h1>
            <Link to="/branches">Info</Link>
        </div>
    )
}

export default Banks;