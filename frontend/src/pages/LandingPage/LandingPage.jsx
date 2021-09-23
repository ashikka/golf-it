import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.scss";

import { Row, Button } from "react-bootstrap";
import Tilt from "react-tilt";
import ArchLinux from "../../assets/arch.png";

const LandingPage = () => (
  <article>
    <Row className="d-flex-row justify-content-around">
      <div>
        <div>
          <div>
            <div className="w-50" />
            <h1 className="header">Golf it!</h1>
          </div>
          <br />
          <div className="text-center">
            <h5 className="subheader">
              Golf it! is a game designed to let
              <br />
              you show off your code-fu
            </h5>
            <br />
            <p className="paragraph">
              by solving problems in
              <br></br>
              the least number of <b>characters.</b>
            </p>
          </div>
        </div>
      </div>
    </Row>
    <Row className="d-flex parent justify-content-center">
      <Tilt
        className="Tilt"
        options={{ max: 25, easing: "cubic-bezier(.17,.67,.74,.76)" }}
      >
        <div className="parent-div h-100 w-100">
          <div className="glow" />
          <img src={ArchLinux} alt="" className="arch" />
        </div>
      </Tilt>
    </Row>
    <Row className="d-flex justify-content-center">
      <Link to="/game">
        <Button className="play">Play!</Button>
      </Link>
    </Row>
  </article>
);

export default LandingPage;
