import { v4 } from "uuid";
const PORT = "8765";
const SOCKET_URL = "ws://localhost";
let ws = new WebSocket(`${SOCKET_URL}:${PORT}`);

const onSocketClose = () => {
  console.log("disconnected from the server");
  setTimeout(() => {
    ws = new WebSocket(SOCKET_URL);
  }, 500);
};

ws.addEventListener("open", () => {
  ws.id = v4();
  console.log("connected to the server");
});

ws.addEventListener("close", onSocketClose);

export { ws, onSocketClose };
