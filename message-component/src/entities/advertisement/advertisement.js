import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/** @module Advertisement */
/**
 * Renders an advertisement
 * @param {*} props
 * @param {*} props.id - identification
 * @param {string} props.title - message title
 * @param {boolean} props.visited - message state variable which represents users interaction with the message
 * @function
 */

const Advertisement = (props) => {
  const isVisitedClickHandler = () => {
    if (props.visited === false) {
      props.isVisitedClickHandler();
    }
  };

  return (
    <Card>
      <Card.Header>{props.title} </Card.Header>
      <Card.Body>
        <Container>
          <Card.Text>Narizeni velitele roty ze dne 8.10.2022 ...</Card.Text>
          <Row>
            <Col md={8}>
              <span style={{ paddingRight: "10px" }}> Odkaz: </span>
              <a
                href={"#messagepage"}
                className="card-link"
                onClick={isVisitedClickHandler}
              >
                {props.link}
              </a>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Advertisement;
