// Guardo todas las peticiones aquí
import axios from 'axios';
import { User } from '../api/User';

const API = 'https://imonteza-recipes-api.herokuapp.com';
export const getUser = async () => {
  return await axios.get(`${API}/profile`);
};

export const createUser = async (user: User) => {
  return await axios.post(`${API}/signup`, user);
};
export const signIn = async (obj: User) => {
  return await axios.post(`${API}/signin`, obj);
};

export const updateUser = async (id: string, obj: any) => {
  return await axios.put(`${API}/profile/${id}`, obj);
};
