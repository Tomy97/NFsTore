import axios from "axios";
import { IUser } from "../interfaces/IUser";

export const loginService = async (userData: IUser) => {
  const { data } = await axios.post("http://localhost:3000/users", userData);

  return data;
};

export const registerService = async (userData: any) => {
  const setData = {
    name: userData.Name,
    user: userData.Username,
    email: userData.Email,
    password: userData.Password
  };
  const { data } = await axios.post("http://localhost:3000/users", setData);
  return data;
};
