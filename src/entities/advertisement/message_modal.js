import { useQueryGQL, Loading, LoadingError } from "../index";
import { Modal, Button } from "react-bootstrap";
import Advertisement from "./advertisement.js";
import { useEffect, useState } from "react";

import "./message_modal.css"; 


/** @module MessageModal */


export const MessageModal = (props) => {
  const [isVisited, setIsVisited] = useState(false);
  const [message, setMetssage] = useState({});

   const  isVisitedClickHandler = (navigate) => {
    const timer = setTimeout(()=>{
      console.log("Sending POST request with changes visited parameter to the API...");
      // fetch("/gql", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       query: `
        //         mutation{
        //          message(id: ${id}){
        //          visited: true
        //         }              
        //             `,
        //       variables: {
        //         now: new Date().toISOString(),
        //       },
        //     }),
        //   });
      navigate("/ui/pp");
    },1);
    setIsVisited(true);

  };


  useEffect(()=>{
    
//  const queryFunc = ModalMessageQuery;
 // const [state, error] = useQueryGQL(props.id, queryFunc, (response) => response.data.message, [props.id])
    // if (error != null) {
//      console.log(error);
      //setError(error);
//   } else if (state != null) {
//       setMessage({ });
//       
// }
     setMetssage({
      id: 2,
      title: "Příprava na ucebne",
      link: "www.uios.cz/ui/pp",
      visited: false,
    });
  
  },[setIsVisited]);
 

  return (
    <>
      { !isVisited && <ModalMessageStoryBook isVisitedClickHandler={isVisitedClickHandler} {...message}/> }
    </>
  );
};

/**
* Renders a modalview component which contains predefined data which can are overrided by props
* @param {*} props 
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
 * @param {number} props.id - identification
 * @param {string} props.title - message title
 * @param {boolean} props.visited - message state variable which represents users interaction with the message
 * @function
 */

export const ModalView = (props) => {

  const [show, setShow] = useState(true);
  const handleClose = () => {
    
    setShow(false);}

  const isVisible = props.isVisible;
  return (
    <Modal show={show} animation={false}>
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
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

// /** 
// * Function fetching the data and returning promise with the data from API endpoint
// * @function
// */
export const ModalMessageQuery = (id) => {

  //  fetch('/gql', {
  //      method: 'POST',
  //      headers: {
  //      'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify({
  //      query: `
  //      query{
  //          message(id: ${id}) {
  //              title
  //              link
  //              visited
  //              
  //            }
  //      }              
  //          `
  //  }),
  //  })
  };