export interface IUser {
  id?: number;
  token?: string;
  name?: string;
  userName?: string;
  user?: string;
  email?: string;
  avatar?: string;
  password?: string;
  passwordConfirmation?: string;
  loggedIn?: boolean;
  exp?: number;
  iat?: number;
  role?: string;
}
