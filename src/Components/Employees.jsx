import React from 'react';

function Employees(props) {
    return(
        <div>
            <p>{props.name} {props.middleName} {props.lastName}</p>
        </div>
    )
};

export default Employees;