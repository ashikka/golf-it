import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./questionCard.scss";

const CoursePageCard = (props) => {

  return (
    <Col lg={4} className="d-flex justify-content-center align-items-center">
      <Card className="card text-center question-card">
        <Card.Body>
          <Card.Title className="text-center card-title">
            {props.questionName}
          </Card.Title>
          <p>
          {props.question}
          </p>
          <Button>Solve</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CoursePageCard;
