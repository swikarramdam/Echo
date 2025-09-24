// frontend/socket.js
import { io } from "socket.io-client";

let socket;

export const initSocket = () => {
  if (!socket) {
    socket = io(`${import.meta.env.BACKEND_URL}`);
  }
  return socket;
};

export const joinRoom = (roomId) => {
  if (socket) socket.emit("joinRoom", roomId);
};

export const leaveRoom = (roomId) => {
  if (socket) socket.emit("leaveRoom", roomId);
};

export default socket;
