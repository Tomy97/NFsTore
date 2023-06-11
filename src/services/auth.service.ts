import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const loginService = async (userData: any) => {
  const login = {
    // user: userData.Username,
    email: userData.Username,
    password: userData.Password,
  };;
  
  const { data } = await axios.post(`${API_URL}/auth/login`, login);
  return data;
};

export const registerService = async (userData: any) => {
  const register = {
    name: userData.Name,
    user: userData.Username,
    email: userData.Email,
    password: userData.Password,
  };
  const { data } = await axios.post(`${API_URL}/auth/register`, register);
  return data;
};
