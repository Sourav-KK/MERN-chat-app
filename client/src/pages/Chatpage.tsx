import axios from "axios";
import { useEffect } from "react";

const Chatpage = () => {
  useEffect(() => {
    fetchChats();

    return () => {};
  }, []);

  const fetchChats = async () => {
    const data = await axios.get("http://localhost:4001/api/chats");
    console.log(data);
  };

  return <div>Chatpage</div>;
};

export default Chatpage;
