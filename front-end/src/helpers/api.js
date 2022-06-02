import axios from 'axios';

const { REACT_APP_HOSTNAME, REACT_APP_BACKEND_PORT } = process.env;

const url = `http://${REACT_APP_HOSTNAME || 'localhost'}:${REACT_APP_BACKEND_PORT || '3001'}`;

const api = axios.create({ baseURL: url });

export const getProducts = async (endpoint, token) => api.get(endpoint, {
  headers: { Authorization: token },
});

export const postRequest = async (endpoint, body) => api.post(endpoint, body);

export default api;
