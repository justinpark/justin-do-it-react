import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/'
    : '/api/',
});

export default Api;
