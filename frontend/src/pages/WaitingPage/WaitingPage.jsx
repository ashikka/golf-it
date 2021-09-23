/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";
import "./WaitingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Row, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getQuestionsThunk } from "../../redux/slices/questionSlice";
import QuestionCard from "../../components/questionCard/questionCard";

/*
TODO
1. Ensure the 2 users have joined the room succesfully
2. When creator of room clicks on start then start game at same time 
3. Send request for selected round from the dropdown 
*/

function createCard(data) {
  return (
    <QuestionCard
      questionName={data.questionName}
      question={data.question}
      key={data.id}
    />
  );
}
const WaitingPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  console.log(questions);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getStuff() {
    dispatch(getQuestionsThunk());
  }
  useEffect(() => {
    getStuff();
  }, [questions, getStuff]);

  return (
    <>
      <Row className="justify-content-center mt-5">
        <h1 className="mb-5">Waiting Room</h1>
        <div className="waiting-room d-flex flex-row justify-content-around p-5">
          <h1>Players</h1>
          <Dropdown>
            <Dropdown.Toggle>Select rounds</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              <Dropdown.Item href="#/action-3">4</Dropdown.Item>
              <Dropdown.Item href="#/action-3">5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Link to="/start">
            <Button className="mb-5" style={{ height: "3rem", width: "10rem" }}>
              Start game
            </Button>
          </Link>
        </div>
        <h1 className="mb-5">Questions</h1>
        {questions.data ? questions.data.data.questions.map(createCard) : <></>}
      </Row>
    </>
  );
};

export default WaitingPage;
