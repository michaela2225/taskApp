import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import EmployeeCard from '../employeeCard/EmployeeCard';
import { updateFinalListEmployee } from '../../store/employeeReducer/action';

import './EmployeesList.css';

const EmployeesList = ({ employeesList = [] }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="list-employees">Employees</div>
            <div className="list-wr">
                {employeesList.map((item, letter) => {
                    return (
                        <div key={`employee-${letter}`} className="list-container-for-employee">
                            <h3 className="list-letter">{item.letter}</h3>
                            {item.employees.length > 0 ? (
                                <ul>
                                    {item.employees.map((employee) => {
                                        const onChange = (flag) => {
                                            employee.showDateBirthday = flag;
                                            dispatch(updateFinalListEmployee([
                                                ...employeesList,
                                            ]))
                                        }

                                        return (
                                            <li key={employee.id}>
                                                <EmployeeCard {...employee} onChange={onChange} />
                                            </li>
                                        )
                                    }
                                    )}
                                </ul>
                            ) : (
                                <div>No Employees</div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

EmployeesList.propTypes = {
    employeesList: PropTypes.array
}

export default EmployeesList;