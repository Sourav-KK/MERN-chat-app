import { Types } from "mongoose";

const mongooseUtls = (idArr: string[]) => {
  let newArr: Types.ObjectId[] = [];

  for (let i = 0; i < idArr.length; i++) {
    const element = new Types.ObjectId(idArr[i].trim());
    newArr.push(element);
  }
  return newArr;
};

const stringToObjectID = (val: string) => {
  val = val.trim();
  const objid = new Types.ObjectId(val);
  return objid;
};

export { mongooseUtls, stringToObjectID };
