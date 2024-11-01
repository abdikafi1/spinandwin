// src/api/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Item API calls
export const createItem = (data) => API.post('/items', data);
export const getItems = () => API.get('/items');
export const getItem = (id) => API.get(`/items/${id}`);
export const updateItem = (id, data) => API.put(`/items/${id}`, data);
export const deleteItem = (id) => API.delete(`/items/${id}`);

// User API calls
export const createUser = (data) => API.post('/users/add', data);

// GameResult API calls
export const createGameResult = (data) => API.post('/gameresults/add', data);
export const getGameResults = () => API.get('/gameresults');
