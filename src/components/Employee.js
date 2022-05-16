import React from "react";

export const Employee = ({employee, onRemove}) => <li key={Date.now()}>
    <div>{employee.name}</div>
    <div>{employee.surname}</div>
    <button onClick={() => onRemove(employee.id)}>-</button>
</li>