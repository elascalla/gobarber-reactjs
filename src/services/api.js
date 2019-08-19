import axios from 'axios';

const api = axios.create({
  baseURL: 'https://appteste.com.br',
});

export default api;
