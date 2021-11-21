import * as axios from 'axios';

const instance = axios.create({
 baseURL: 'https://yalantis-react-school-api.yalantis.com/api',
});

export const getEmployees = () => {
 return instance.get('/task0/users')
};