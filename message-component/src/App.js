import { useState } from "react";
import MessageAdminList from "./components/MessageAdminList";
import Card from "./components/Card";
import Message from "./components/Message";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const mock_messages = [
  {
    id: "1",
    title: "Příprava v poli",
    link: "www.moodle.com/pp",
    visited: false,
  },
  {
    id: "2",
    title: "BoRo",
    link: "www.intranet.unob.com/email",
    visited: false,
  },
  // {
  //   id: "3",
  //   title: "OUI 2022",
  //   link: "www.moodle.com/oui",
  //   visited: false,
  // },
];

const admin_messages_list = [
  {
    id: "1",

    title: "Příprava v poli",
  },
  {
    id: "2",
    title: "BoRo",
  },
];

const users = [
  {
    id: "1",
    firstName: "Tomáš",
    lastName: "Vávra",
  },
  {
    id: "2",
    firstName: "Filip",
    lastName: "Yndler",
  },
];

const App = () => {
  const [messages, setMessages] = useState(mock_messages);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeMessageHandler = (id) => {
    setMessages((prevMessages) => {
      let alteredMessages = prevMessages.map((message) => {
        if (message.id == id) {
          return { ...message, visited: true };
        }
        return message;
      });

      return [...alteredMessages];
    });
  };

  return (
    <div>
      <Card className="expenses">
        <MessageAdminList
          messages={admin_messages_list}
          users={users}
          onChangeMessage={changeMessageHandler}
        />
      </Card>

      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            {" "}
            <Message
              link={mock_messages[0].link}
              title={mock_messages[0].title}
              visited={mock_messages[0].visited}
            ></Message>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default App;
