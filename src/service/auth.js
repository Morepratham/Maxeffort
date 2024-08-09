// src/service/auth.js
import { axiosInstance } from './axiosInstance'; // Adjust the path if needed

export const login = (data) => {
  return axiosInstance.post('/login?lang=en', data);
};
