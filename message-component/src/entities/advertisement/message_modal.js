import { useQueryGQL, Loading, LoadingError } from "../index";
import { Modal, Button } from "react-bootstrap";
import Advertisement from "./advertisement.js";
import { useEffect, useState } from "react";

/** @module MessageModal */

export const MessageModal = (props) => {
  const [isVisited, setIsVisited] = useState(false);
  const [message, setMetssage] = useState({});

  const isVisitedClickHandler = () => {
    setIsVisited(true);

    // setIsVisible(false);
    // modalFetching().then(

    // )
    setTimeout(() => {
      console.log(
        "Sending POST request with changes visited parameter to the API..."
      );
    }, 1000);
  };

  useEffect(() => {
    //const [state, error] = useQueryGQL(props.id, queryFunc, (response) => response.data.subject, [props.id])
    setMetssage({
      id: 2,
      title: "Příprava na ucebne",
      link: "www.moodle.com/pu",
      visited: false,
    });
  }, []);

  return (
    <>
      {!isVisited && (
        <ModalMessageStoryBook
          isVisitedClickHandler={isVisitedClickHandler}
          {...message}
        />
      )}
    </>
  );
};

// const modifingQuery = (id) => {
//   fetch('/gql', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     redirect: 'follow', // manual, *follow, error
//     body: JSON.stringify({
//         "query":
//             `
//             query {
//                 message: message(id)
//                    visited: true
//             }
//         `
//     }),
// })
// }

/**
 * Renders a modalview component which contains predefined data which can are overrided by props
 * @param {*} props
 * @function
 */

export const ModalMessageStoryBook = (props) => {
  const extraProps = {
    id: 1,
    title: "Příprava v poli",
    link: "www.moodle.com/pp",
    visited: false,
  };
  return <ModalView {...extraProps} {...props} />;
};

/**
 * Renders a modal with data representing a message, contains predefined data which can are overrided by props

 * @param {*} props 
 * @param {*} props.id - identification
 * @param {string} props.title - message title
 * @param {boolean} props.visited - message state variable which represents users interaction with the message
 * @function
 */

export const ModalView = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const isVisible = props.isVisible;
  return (
    <Modal show={show}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Advertisement
          link={props.link}
          title={props.title}
          visited={props.visited}
          isVisitedClickHandler={props.isVisitedClickHandler}
        ></Advertisement>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

/**
 * Function fetching the data and returning promise with the data from API endpoint
 * @function
 */

export const ModalQuery = () =>
  fetch("/gql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query{
           message:latest
        }              
            `,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  });
