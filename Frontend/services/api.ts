import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-ip-address:3000', // Replace with your backend IP address
});

export const registerUser = async (username, password) => {
  return await api.post('/auth/register', { username, password });
};

export const loginUser = async (username, password) => {
  return await api.post('/auth/login', { username, password });
};
