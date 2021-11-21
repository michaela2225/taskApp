import React from 'react';
import PropTypes from 'prop-types';

import './EmployeesDOBList.css';

const DateDOBList = ({ employeesList = [], employeesDobList = [] }) => {
    const employeesWithDob = [];

    employeesList.map((item) => {
        item.employees.map(
            (employee) =>
                employee.showDateBirthday && employeesWithDob.push(employee),
        );
    });

    employeesDobList.map((item) => {
        employeesWithDob.map((employee) => {
            if (item.month === employee.dob.split(' ')[1]) {
                const id = item.employees.find((e) => e.id === employee.id);
                !id && item.employees.push(employee);
            }
        });
        item.employees = item.employees.filter((e) => e.showDateBirthday);
        item.employees.sort((first, second) =>
            second.lastName > first.lastName ? -1 : 1,
        );
    });

    if (!employeesWithDob.length > 0) {
        return (
            <div className="list-dob-wr">
                <div className="list-title">Employees birthday</div>

                <div className="font">Employees List is empty</div>
            </div>
        );
    }

    return (
        <div className="list-dob-wr">
            <div className="list-title">Employees birthday</div>

            {employeesDobList.map((item, index) => (
                <div key={`employee-dob-${index}`}>
                    {item.employees.length > 0 ? (
                        <>
                            <div className="list-DOB">{item.month}</div>
                            <ul>
                                {item.employees.map((employee) => (
                                    <li key={`dob-${employee.id}`} className="list-dob-element">
                                        <div className="font-employee">{`${employee.firstName} ${employee.lastName} ${employee.dob}`}</div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            ))}
        </div>
    );
};

DateDOBList.propTypes = {
    employeesList: PropTypes.array,
    employeesDobList: PropTypes.array,
};

export default DateDOBList;
