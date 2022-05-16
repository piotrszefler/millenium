import React, {useState} from 'react';
import {Employee} from "./Employee";

const testEmployees = [
    { id: 1, name: "Jan", surname: "Kowalski" },
    { id: 2, name: "Grzegorz", surname: "Iksiński" },
    { id: 3, name: "Jan", surname: "Kowalski" },
    { id: 4, name: "Random", surname: "Random"}
]

export const Employees = () => {

    const [employees, setEmployees] = useState(testEmployees)

    const handleAdd = (newEmployee) => setEmployees([...employees, newEmployee]);
    const handleRemove = (id) => setEmployees(employees.filter(e => e.id !== id))

    return <div className="employees">
        <div>Pracownicy</div>
        <div>{employees.length}</div>
        <ul>
            {employees.map((employee) =>
                <Employee
                    key={employee.id}
                    employee={employee}
                    onAdd={handleAdd}
                    onRemove={handleRemove}
                />
            )}
        </ul>

        <button
            disabled={employees.length >= 5}
            onClick={() => setEmployees([...employees, {...testEmployees[3], id: Date.now() + employees.length}])}
        >Dodaj</button>

    </div>;
}