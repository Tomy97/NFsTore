import axios from "axios";

export const loginService = async (userData: any) => {
  const login = {
    user: userData.Username,
    password: userData.Password
  };
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/users/login`,
    login
  );
  return data;
};

export const registerService = async (userData: any) => {
  const register = {
    name: userData.Name,
    user: userData.Username,
    email: userData.Email,
    password: userData.Password
  };
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/users/register`,
    register
  );
  return data;
};
