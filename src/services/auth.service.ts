import axios from "axios";
import { IUser } from "../interfaces/IUser";

export const loginService = async (userData: any) => {
  const login = {
    user: userData.Username,
    password: userData.Password
  };
  const { data } = await axios.post("http://localhost:3000/users/login", login);

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
    "http://localhost:3000/users/register",
    register
  );
  return data;
};
