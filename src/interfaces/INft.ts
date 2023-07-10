import { IUser } from "./IUser";

export interface INft {
  id: string | number;
  name: string;
  imagePath: string;
  price: number;
  create?: Object;
  owner?: IUser;
  user?: string;
}
