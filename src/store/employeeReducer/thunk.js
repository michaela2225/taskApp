import { employeesWithLetter } from '../../constants';
import moment from 'moment';
import { setFinalListEmployee } from './action';
import { initialState } from './reducer';
import { getEmployees } from '../../API/helper';
import { setToLocal } from '../../localStorage/storage';

export const fetchEmployees = () => async dispatch => {
    if (initialState.finalListEmployee.length > 0) {
        return
    }

    try {
        const { data, status } = await getEmployees()

        if (status === 200) {
            data.sort((first, second) =>
                second.firstName > first.firstName ? -1 : 1,
            );
            data.map((employee) => {
                employee.showDateBirthday = false;
                employee.dob = moment(employee.dob).format('D MMMM YYYY');
            });

            employeesWithLetter.map((item) => {
                data.map((employee) => {
                    employee.firstName[0] === item.letter && item.employees.push(employee);
                });
            });

            setToLocal('state', employeesWithLetter)
            dispatch(setFinalListEmployee(employeesWithLetter))
        }
    } catch (err) {
        console.log(err);
    }

};