/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback, useRef } from "react";
import "./WaitingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button } from "react-bootstrap";
import { getQuestionsThunk } from "../../redux/slices/questionSlice";
import QuestionCard from "../../components/questionCard/questionCard";
import { Link, useHistory } from "react-router-dom";
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

  const { location } = useHistory();

  const chooseQuestion = useCallback(async (question) => {
    setSelectedQuestion(question);

    try {
      const roomId = await api.createRoom({ question });
      setCreatedRoomID(roomId);
      setPlayers([api.clientID]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const search = new URLSearchParams(location.search);
  if (!createdRoomID && search.has("r")) setCreatedRoomID(search.get("r"));

  useEffect(() => {
    if (!createdRoomID) return;
    console.log("[SOCK]", "(Join)", createdRoomID);

    api.joinRoom(createdRoomID).then(async (room) => {
      const { question, players } = room;
      setSelectedQuestion(question);
      setPlayers(players);
    });
  }, [createdRoomID]);

  useEffect(() => {
    api.onRoomJoin((playerID) => {
      if (!players.includes(playerID)) setPlayers([...players, playerID]);
    });
  }, [players]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${window.location.href}?r=${createdRoomID}`);
  };

  if (!selectedQuestion && !createdRoomID)
    return (
      <Row>
        <div className="mt-5 mb-5" style={{ textAlign: "left" }}>
          <h1><b>Challenges</b></h1>
          <p>Choose a challenge below and invite a friend to solve it with you!</p>
        </div>

        {questions.data &&
          questions.data.data.questions.map((_q) => (
            <QuestionCard
              key={_q.id}
              questionName={_q.questionName}
              question={_q.description}
              onChoose={() => {
                chooseQuestion(_q);
              }}
            />
          ))}
      </Row>
    );
  else
    return (
      <>
        <Row
          className="justify-content-center mt-5"
          style={{ margin: "auto", maxWidth: "800px" }}
        >
          <div
            className="waiting-room d-flex flex-column justify-content-around"
            style={{ padding: "4em" }}
          >
            <h1><b>Invite</b></h1>
            <p>Invite players by sending this link!</p>

            {players.length < 2 ? (
              <div>
                <span
                  style={{
                    padding: "0.5em 1em",
                    border: "1px solid gray",
                    borderRadius: "0.5em",
                    backgroundColor: "#00000060",
                  }}
                >
                  <code>
                    {window.location.href}?r={createdRoomID}
                  </code>
                </span>
                <span>
                  <Button style={{ margin: "0 1em" }} onClick={copyToClipboard}>
                    Copy
                  </Button>
                </span>

                <br />
                <br />
                <p>Waiting for players to join</p>
              </div>
            ) : (
              <Link to="/start">
                <Button size="lg">Start Game</Button>
              </Link>
            )}
          </div>
        </Row>
      </>
    );
};

export default WaitingPage;
