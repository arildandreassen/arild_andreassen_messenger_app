import "../css/App.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import { ws, onSocketClose } from "../connection.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ws.addEventListener("message", (message) => {
      const parsedData = JSON.parse(message.data);
      setMessages((messages) => [...messages, parsedData]);
    });
    const currentSocket = ws;

    return () => {
      currentSocket.removeEventListener("close", onSocketClose);
    };
  }, []);

  return (
    <div className="App">
      <Chat messages={messages} />
    </div>
  );
}

export default App;
