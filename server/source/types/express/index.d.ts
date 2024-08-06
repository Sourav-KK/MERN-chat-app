// server/types/express/index.d.ts
import { UserTypesForRequest } from "../../Utilities/interface_nd_Types/activeUser_T";

export {};

declare global {
  namespace Express {
    export interface Request {
      authUserDetails: UserTypesForRequest | null;
    }
  }
}
