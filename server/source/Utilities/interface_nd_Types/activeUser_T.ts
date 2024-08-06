// server/types/customElements.ts
import { Types } from "mongoose";

export type UserTypesForRequest = {
  id: Types.ObjectId;
  fullName: string;
  userName: string;
  gender: string;
  displayPicture: string;
};
