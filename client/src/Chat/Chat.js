import React from "react";
import moduleStyles from "./Chat.module.css";

const Chat = props => {
  let chat = props.chat;
  return (
    <div>
      <ul>
        {chat.map(el => (
          <li className={moduleStyles.li}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
