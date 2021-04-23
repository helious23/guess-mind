import { handleMessageNotif } from "./chat";

const socket = io("/");

const sendMessage = (message) => {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
};

const setNickname = (nickname) => {
  socket.emit("setNickname", { nickname });
};

socket.on("messageNotif", handleMessageNotif);
