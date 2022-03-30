import React from "react";
import Message from "./Message";

const MessageList = (props) => {
  const messageChangeHandler = (id) => {
    props.onChangeMessage(id);
  };
  return (
    <div>
      {props.messagesList.map((message) => (
        <Message
          onMessChange={messageChangeHandler}
          key={message.id}
          id={message.id}
          title={message.title}
          link={message.link}
          visited={message.visited}
        ></Message>
      ))}
    </div>
  );
};

export default MessageList;
