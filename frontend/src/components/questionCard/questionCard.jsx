import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import "./questionCard.scss";
import ReactMarkdown from "react-markdown";


const QuestionCard = (props) => {
  return (
    <Col sm={12} className="d-flex justify-content-center align-items-center">
      <Card className="card question-card p-2" style={{ textAlign: "left" }}>
        <Card.Body>
          <Row>
            <Col md={8} sm={12}>
              <Card.Title className="card-title">
                <h2><b>{props.questionName}</b></h2>
              </Card.Title>
              <ReactMarkdown children={props.question} />
            </Col>

            <Col md={4} sm={12} style={{ textAlign: "right" }}>
              <Button onClick={props.onChoose}>Choose</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default QuestionCard;
