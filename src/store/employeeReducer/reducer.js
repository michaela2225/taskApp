import { SET_FINAL_LIST_EMPLOYEE, UPDATE_FINAL_LIST_EMPLOYEE } from './constants';
import { employeesWithMonth } from '../../constants';
import { getFromStorage, setToLocal } from '../../localStorage/storage';

export const initialState = {
    finalListEmployee: getFromStorage('state') || [],
    employeeDobList: employeesWithMonth,
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINAL_LIST_EMPLOYEE:
            return { ...state, finalListEmployee: action.data }
        case UPDATE_FINAL_LIST_EMPLOYEE:
            setToLocal('state', action.data);

            return {
                ...state,
                finalListEmployee: action.data
            }
        default:
            return state
    };
};

export default employeeReducer;


