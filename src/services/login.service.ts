import axios from "axios";
import { IUser } from "../interfaces/IUser";

export const loginService = async (userData: IUser) => {
  const { data } = await axios.post("http://localhost:3000/users", userData);
  console.log(data);

  return data;
};
