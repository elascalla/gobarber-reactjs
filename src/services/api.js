import axios from 'axios';

const api = axios.create({
  baseURL: 'http://appteste.com.br',
});

export default api;
