import { useQueryGQL, Loading, LoadingError } from "../index";
import { Table, Col, Row, Card }from "react-bootstrap";
import { useParams } from "react-router-dom";


/** @module Message */

/**
  * Renders a page with data representing a subject, contains predefined data which can are overrided by props
  * @param {*} props 
  * @function
  */

 export const MessageStoryBook = (props) => {
     const extraProps = {
         "id": 1,
         "title": "Příprava v poli",
         "users": [
          {
            "id": 1,
            "firstName": "Tomáš",
            "lastName": "Vávra",
            "visited": false
          },
          {
            "id": 2,
            "firstName": "Filip",
            "lastName": "Navratil",
            "visited": false
          }]
       };
     return <MessageLarge {...extraProps} {...props} />
 }

 /**
 * Retrieves the data from GraphQL API endpoint
 * @param {number} id - identificator
 * @function MessageQuery */

 export const MessageQuery = (id) => {

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
//              users {
//                name
//                lastname
//                visited
//              }
//            }
//      }              
//          `
//  }),
//  })
};


/**
  * Renders an overview with data representing a message, contains predefined data which can are overrided by props
  * @param {*} props 
  * @function Message */

export const Message = (props) => {
 
  return (
    <div>
        <Row>
          <Col md={4}>
        <Card>
            <Card.Header>
            <Row>
              <Col md={8}>{props.title} </Col>
              <Col>Nesplneno : {`${props.users.length}`}/10 </Col>
            </Row>
            </Card.Header>
            <Card.Body>
            {/* <Container>
              */}
            <h4>Lajdaci: </h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Jméno</th>
                  <th>Přijmení</th>
                </tr>
              </thead>
              <tbody>
                {props.users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            {/* </Container> */}
          </Card.Body>
        </Card>
        </Col>
         <Col md={4}>
         </Col>
        </Row>
    </div>
  );
};

/**
  * Renders an card which wraps the message component
  * @function
  * @param {*} props
  */

export function MessageLarge(props) {
    
  return (
      <Card>
          <Card.Header>
              <h4>Karta zpravy</h4>
          </Card.Header>
          <Card.Body>
           <Message id={props.id} {...props} />
          </Card.Body> 
        </Card>
  )}


  /**
 * Fetch the data from API endpoint and renders a page representing a subject
 * @param {*} props - extra props for encapsulated components / visualisers
 * @param {*} [props.as = MessageStoryBook] - ReactJS component (function) which is responsible for rendering
 * @param {*} [props.with = MessageQuery] - function fetching the data and returning promise with the data from API endpoint
 * @function
 */

export const MessagePageFetching = (props) => {

  const Visualizer =  MessageStoryBook;
  const queryFunc = MessageQuery();

 // const [state, error] = useQueryGQL(props.id, queryFunc, (response) => response.data.message, [props.id])
 const state = true;
 const error = null;
  
  if (error != null) {
      return <LoadingError error={error} />
  } else if (state != null) {
      return <Visualizer {...props} {...state} />
  } else {
      return <Loading>Zprava... {props.id}</Loading>
  }
}



/** 
* Renders a page representing a messsage, designed as a component for a ReactJS router
* @param {*} props - extra props for encapsulated components / visualisers
* @function MessagePage
*/
export  const MessagePage = ()=>{
  const { id }  = useParams();

  return <MessagePageFetching id={id} />; 
}
