/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import "./WaitingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Row, Dropdown, Button } from "react-bootstrap";
import { getQuestionsThunk } from "../../redux/slices/questionSlice";
import QuestionCard from "../../components/questionCard/questionCard";
import { Link, Route, useHistory } from "react-router-dom";
import api from "../../api";


const WaitingPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getQuestionsThunk());
  }, [dispatch, questions]);

  const [selectedQuestion, setSelectedQuestion] = useState();
  const [createdRoomID, setCreatedRoomID] = useState();
  const [players, setPlayers] = useState([]);
  
  const history = useHistory();

  const chooseQuestion = useCallback(async (question) => {
    setSelectedQuestion(question);

    try {
      const roomId = await api.createRoom({ question });
      setCreatedRoomID(roomId);
      setPlayers([ api.clientID ]);
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  const search = new URLSearchParams(history.location.search);
  if (!createdRoomID && search.has('r'))
    setCreatedRoomID(search.get('r'))

  useEffect(() => {
    if (!createdRoomID) return;
    console.log('[SOCK]', '(Join)', createdRoomID);
      
    api.joinRoom(createdRoomID).then(async (room) => {
      const { question, players } = room;
      setSelectedQuestion(question);
      setPlayers(players);
    })
  }, [createdRoomID])

  useEffect(() => {
    api.onRoomJoin((playerID) => {
      if (!players.includes(playerID))
        setPlayers([ ...players, playerID ])
    });
  }, [players])

  if (!selectedQuestion && !createdRoomID)
    return (
      <Row>
        <div className="mt-5 mb-5" style={{ textAlign: "left" }}>
          <h1>Questions</h1>
          <p>Choose a question below</p>
        </div>

        {
          questions.data &&
          questions.data.data.questions.map((_q) => (
            <QuestionCard
              key={_q.id}
              questionName={_q.questionName}
              question={_q.question}
              onChoose={() => {
                chooseQuestion(_q)
              }}
            />
          ))
        }
      </Row>
    )
  else
    return (
      <>
        <Row className="justify-content-center mt-5">
          <div className="waiting-room d-flex flex-row justify-content-around p-5">
            <h1>Players</h1>

            <div>
              <p><b>Invite Link</b></p>
              <p>http://localhost:3000/game?r={ createdRoomID }</p>
            </div>

            {
              players.length < 2
              ? <p>Waiting for players to join</p>
              : <Link to="/start"><Button>START</Button></Link>
            }
          </div>
        </Row>
      </>
    );
};

export default WaitingPage;
