import { expressConfig } from "./express";
import serverStaer from "./server";
import routes from "./Routes/index";

const Server = async () => {
  expressConfig();
  serverStaer();
  routes();
};

export default Server;
