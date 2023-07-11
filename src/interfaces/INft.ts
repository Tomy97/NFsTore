import { IUser } from "./IUser";

export interface INft {
  id: string | number;
  name: string;
  file: File;
  price: number;
  create?: Object;
  owner?: IUser;
  user?: string;
}
