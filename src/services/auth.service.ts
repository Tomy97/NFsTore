import axios from "axios";
import { IUser } from "interfaces/IUser";

const API_URL = import.meta.env.VITE_API_URL;

export const loginService = async (userData: IUser) => {
  console.log('userData',userData);
  
  const login = {
    email: userData.email,
    password: userData.password,
  };
  const { data } = await axios.post(`${API_URL}/auth/login`, login);
  
  return data.authToken;
};

export const registerService = async (userData: IUser) => {
  const register = {
    userName: userData.userName,
    email: userData.email,
    password: userData.password,
    passwordConfirmation: userData.passwordConfirmation,
  };
  
  const { data } = await axios.post(`${API_URL}/auth/register`, register);
  return data;
};
