import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.71.163.140:3333',
});

export default api;
