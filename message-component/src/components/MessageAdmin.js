import React from "react";
import Message from "./Message";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MessageAdmin = (props) => {
  // const messageChangeHandler = (id) => {
  //   props.onChangeMessage(id);
  // };

  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Container>
              <Row>
                <Col md={8}>{props.title} </Col>
                <Col>Pocet splenych zadosti: 12/50 </Col>
              </Row>
            </Container>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Lajdaci</h2>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default MessageAdmin;
