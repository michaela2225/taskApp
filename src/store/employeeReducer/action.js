import { SET_FINAL_LIST_EMPLOYEE, UPDATE_FINAL_LIST_EMPLOYEE } from './constants';

export const setFinalListEmployee = data => ({ type: SET_FINAL_LIST_EMPLOYEE, data });
export const updateFinalListEmployee = data => ({ type: UPDATE_FINAL_LIST_EMPLOYEE, data });