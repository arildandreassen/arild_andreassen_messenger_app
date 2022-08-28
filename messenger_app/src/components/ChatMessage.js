import "../css/ChatMessage.css";

function Message({ text, isOwner }) {
  return (
    <div
      style={{ whiteSpace: "break-spaces" }}
      className={`messageBox ${isOwner}`}
      data-testid="chatmessage"
    >
      {text}
    </div>
  );
}

export default Message;
