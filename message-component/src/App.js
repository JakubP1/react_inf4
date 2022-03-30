import logo from "./logo.svg";
import MessageList from "./components/MessageList";
import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

const mock_messages = [
  {
    id: "1",
    title: "Toilet Paper",
    link: "www.toiletpaper.com",
    visited: false,
  },
  {
    id: "2",
    title: "Car Insurance",
    link: "www.carinsurance.com",
    visited: false,
  },
  {
    id: "3",
    title: "Fun fun forum",
    link: "www.funfunfun.com",
    visited: false,
  },
];

const App = () => {
  const [messages, setMessages] = useState(mock_messages);

  const changeMessageHandler = (id) => {
    setMessages((prevMessages) => {
      let alteredMessages = prevMessages.map((message) => {
        if (message.id == id) {
          return { ...message, visited: true };
        }
        return message;
      });
      console.log(alteredMessages);
      return [...alteredMessages];
    });
  };

  return (
    <Card className="expenses">
      <MessageList
        messagesList={messages}
        onChangeMessage={changeMessageHandler}
      />
    </Card>
  );
};

export default App;
