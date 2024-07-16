import { PORTNO } from "../../configs/config";
import { app } from "./express";

const serverStaer = () => {
  app.listen(PORTNO, () => {
    console.log(`Server listening at port: ${PORTNO}`);
  });
};
export default serverStaer;
