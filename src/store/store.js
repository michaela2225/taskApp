import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import employeeReducer from './employeeReducer/reducer';

const reducer = combineReducers({
    employees: employeeReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

export default store;
