import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./advertisement.css";
import { useNavigate } from "react-router-dom";

/** @module Advertisement */

/**
 * Renders an advertisement 
 * @param {*} props 
 * @param {number} props.id - identification
 * @param {string} props.title - message title
 * @param {boolean} props.visited - message state variable which represents users interaction with the message
 */

 const Advertisement = (props) => {
    const navigate = useNavigate();

    const isVisitedClickHandler = (e) => {
      if (props.visited === false) {
        e.preventDefault();
        props.isVisitedClickHandler(navigate);
      }
      
    }

 return (
    <Card className={classes.adv_card}>
      <Card.Header>{props.title} </Card.Header>
      <Card.Body >
        <Container>
          <Card.Text>
            Narizeni velitele roty ze dne 8.10.2022 ...
          </Card.Text>
          <Row>
            <Col md={8}>
              <span className={classes.spanLabel}> Odkaz: </span>

              <a href="" className="card-link" onClick={isVisitedClickHandler}>
                {props.link} 
                
              </a>

            </Col>
              
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export  default Advertisement;
