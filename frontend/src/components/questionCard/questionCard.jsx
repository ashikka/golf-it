import React from "react";
import { Card, Col } from "react-bootstrap";
import "./questionCard.scss";
import ReactMarkdown from "react-markdown";


const CoursePageCard = (props) => {

  return (
    <Col lg={4} className="d-flex justify-content-center align-items-center">
      <Card className="card question-card" style={{textAlign: "justify", textJustify: "inter-word"}}>
        <Card.Body>
          <Card.Title className="text-center card-title">
            {props.questionName}
          </Card.Title>
          <p>
          <ReactMarkdown children={props.question} />
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CoursePageCard;
