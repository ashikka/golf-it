import React from 'react';
import './LandingPage.scss';
import { Row } from 'react-bootstrap';
import Tilt from 'react-tilt';

const LandingPage = () => (
  <>
    <Row className="d-flex-row justify-content-around">
      <div>
        <div>
          <div>
            <div className="w-50" />
            <h1 className="header">
              Run and test Linux
              <br />
              in your browser
            </h1>
          </div>
          <br />
          <div className="text-center">
            <h5 className="subheader">
              No installations, no long waiting times, its an
              <br />
              operating system in your browser
            </h5>
            <br />
            <p className="paragraph">
              With
              {' '}
              {' '}
              <b>linucks.io</b>
              {' '}
              you can yuck out all the bad distros
            </p>
          </div>
        </div>
      </div>
    </Row>
    <Row className="d-flex parent justify-content-center">
      {/* <Tilt className="Tilt" options={{ max: 25, easing: 'cubic-bezier(.17,.67,.74,.76)' }}>
        <div className="parent-div h-100 w-100">
          <div className="glow" />
          <img src={ArchLinux} alt="" className="arch" />
        </div>

      </Tilt> */}

    </Row>

  </>
);

export default LandingPage;

