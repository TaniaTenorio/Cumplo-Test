import React from 'react';

function Employees(props) {
    return(
        <div>
            <p>Name: {props.name} {props.middleName} {props.lastName}</p>
            <p>Branch:</p>
        </div>
    )
};

export default Employees;