import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API,
  mode: 'no-cors',
});

export default instance;
