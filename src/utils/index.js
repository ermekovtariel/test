import axios from 'axios';

const url = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({});
const api = 'http://localhost:3000/bd.json';
const tokenTrue = 'Bearer_';

instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `${tokenTrue}${
    JSON.parse(localStorage.getItem('user')).token
  }`;
  return config;
});

export default instance;
export { url, api };
