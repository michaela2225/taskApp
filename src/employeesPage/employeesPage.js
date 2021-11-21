import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EmployeesList from '../components/employeeList/EmployeesList';
import DateDOBList from '../components/employeeDOBList/EmployeesDOBList';
import { fetchEmployees } from '../store/employeeReducer/thunk';
import { getEmployeesDobList, getEmployeesList } from '../store/employeeReducer/selector';

import './employeesPage.css';

const Employee = () => {
    const dispatch = useDispatch();
    const employeesList = useSelector(getEmployeesList);
    const employeesDobList = useSelector(getEmployeesDobList);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, []);

    return (
        <div className="main-wr">
            <EmployeesList employeesList={employeesList} />
            <DateDOBList employeesList={employeesList} employeesDobList={employeesDobList} />
        </div>
    );
};

export default Employee;