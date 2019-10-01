import axios from 'axios';

const api = axios.create({
  baseURL: 'http://careers.picpay.com/tests/mobdev',
});

export default api;
