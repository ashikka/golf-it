/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";
import "./WaitingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Row, Dropdown } from "react-bootstrap";
import { getQuestionsThunk } from "../../redux/slices/questionSlice";
import QuestionCard from "../../components/questionCard/questionCard";

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
        <h1 className="mb-5">Questions</h1>
        <div className="jwaiting-room">
          <h1>Players</h1>
          <Dropdown>
            <Dropdown.Toggle>
              Select rounds
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="#/action-1">1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              <Dropdown.Item href="#/action-3">4</Dropdown.Item>
              <Dropdown.Item href="#/action-3">5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {questions.data ? questions.data.questions.map(createCard) : <></>}
      </Row>
    </>
  );
};

export default WaitingPage;
