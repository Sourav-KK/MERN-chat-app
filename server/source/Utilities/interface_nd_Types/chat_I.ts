import { Types } from "mongoose";

export interface newChat_I {
  chatName: string;
  isGroupChat: boolean;
  users: Types.ObjectId[];
}

export interface newGrpChatData_I {
  members: Types.ObjectId[];
  groupName: string;
  adminId: Types.ObjectId;
}

export interface updateBlockGroupchat_I {
  chatName?: string;
  groupDescription?: string;
}
