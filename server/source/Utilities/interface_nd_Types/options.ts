import { Types } from "mongoose";
import { ParsedQs } from "qs";

export interface repoOptionsAllUsers_I {
  value: string | string[] | ParsedQs | ParsedQs[];
  userId: Types.ObjectId;
}
