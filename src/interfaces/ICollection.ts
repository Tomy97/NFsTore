import { IUser } from "./IUser";
import { INft } from "./INft";

export interface ICollection {
  id?: string | number;
  name: string;
  nft?: Array<INft>;
}
