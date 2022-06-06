import React from "react";
import MessageAdmin from "./MessageAdmin";

const MessageAdminList = (props) => {
  return (
    <>
      {props.messages.map((message) => (
        <MessageAdmin
          //   onMessChange={messageChangeHandler}
          key={message.id}
          title={message.title}
          users={props.users}
        ></MessageAdmin>
      ))}
    </>
  );
};

export default MessageAdminList;
