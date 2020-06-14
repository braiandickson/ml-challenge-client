import api from '../config/api';

export const getProducts = (query) => api.get(`/items?q=${query}`);

export const getProductDetail = (id) => api.get(`items/${id}`);
