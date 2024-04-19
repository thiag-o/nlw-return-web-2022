import axios from 'axios';

const baseURLAPI = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
