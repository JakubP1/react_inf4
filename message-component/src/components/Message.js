import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Message = (props) => {
  const visited = props.visited;
  const [isVisited, setIsVisited] = useState(visited);
  const [vistiedText, setVisitedText] = useState("Nesplneno");
  const [checked, setChecked] = useState(visited);

  const checkedChnage = () => {
    setChecked(true);
  };
  const isVisitedClickHandler = () => {
    if (visited == false) {
      setIsVisited(true);
      checkedChnage();
      setVisitedText("Splneno");

      // props.onMessChange(props.id);
    }
  };

  return (
    <Card>
      <Card.Header>{props.title} </Card.Header>
      <Card.Body>
        <Container>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Row>
            <Col md={8}>
              <span style={{ paddingRight: "10px" }}> Odkaz: </span>
              <a href="#" className="card-link" onClick={isVisitedClickHandler}>
                {props.link}
              </a>
            </Col>
            <Col>
              <span
                className={`badge ${
                  visited ? "alert-success" : "alert-danger"
                }`}
              >
                {vistiedText}
              </span>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Message;
