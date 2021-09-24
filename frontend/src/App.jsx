import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.scss";

import LandingPage from "./pages/LandingPage/LandingPage";
import WaitingPage from "./pages/WaitingPage/WaitingPage";
import CodingPage from "./pages/CodingPage/CodingPage";

function App() {
  return (
    <>
      <div className="d-flex-row justify-content-around p-4 m-0 navbar">
        <img src="/logo192.png" alt="GOLF" className="logo" />
      </div>

      <Router basename={process.env.PUBLIC_URL}>
        <Container className="App">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/game">
              <WaitingPage />
            </Route>

            <Route exact path="/start">
              <CodingPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
