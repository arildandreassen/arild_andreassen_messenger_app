import Message from "./ChatMessage";
import { useState } from "react";
import { ws } from "../connection.js";

function Chat({ messages }) {
  const defaultForm = {
    input: "",
  };

  const sendChatMessage = () => {
    if (formData.input) {
      ws.send(JSON.stringify({ owner: ws.id, text: formData.input }));
      setFormData(defaultForm);
    }
  };

  const [formData, setFormData] = useState(defaultForm);

  const handleTextChange = (event) => {
    const { value } = event.target;
    setFormData({
      input: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setFormData(defaultForm);
    sendChatMessage();
  };

  const handleKeyPress = (event) => {
    if (event.shiftKey && event.key === "Enter") {
      // Shift+Enter has no special handling here, and will default to new line
    } else if (event.key === "Enter") {
      sendChatMessage();
    }
  };

  return (
    <div>
      <div className="viewarea">
        <div>
          {messages.map(({ text, owner }, index) => {
            const isOwner = owner === ws.id ? "self" : "other";
            return <Message key={index} text={text} isOwner={isOwner} />;
          })}
        </div>
      </div>
      <form onSubmit={handleClick}>
        <textarea
          className="writearea"
          onChange={handleTextChange}
          value={formData.input}
          onKeyDownCapture={handleKeyPress}
          placeholder="Type to send a message..."
        ></textarea>
        <button type="submit" className="btn btn-primary sendbutton">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
