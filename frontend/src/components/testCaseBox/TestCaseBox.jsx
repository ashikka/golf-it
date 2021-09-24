import React from "react";
import { Row } from "react-bootstrap";
import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
import Loading from "../../assets/loading.gif";

import "./TestCaseBox.css";

const TestCaseBox = ({ status, compilerResponse }) => {
  const renderTestCaseBox = () => {
    if (status === "hidden") {
      return null;
    }
    if (status === "compiling") {
      return (
        <Row className="d-flex w-25 flex-row justify-content-center compiling-box">
          <h4>Compiling...</h4>
          <img className="w-25 h-25" src={Loading} alt="loading.gif" />
        </Row>
      );
    }
    return (
      <div
        className="w-50 mt-5"
        style={{
          background:
            "linear-gradient(180deg, #28292c 0%, rgba(39, 40, 43, 0.82) 100%)",
          boxShadow: "0px 13px 40px #00000030, 0px 4px 4px #00000020",
          borderRadius: "16px",
          padding: "1rem",
        }}
      >
        {compilerResponse.tests.map((test, i) => {
          if (i === 0) {
            if (test.remarks === "Fail") {
              return (
                <>
                  <div className="d-flex flex-row justify-content-around">
                    <div className="case-box">
                      <div className="test-case-box">Sample Test Case</div>
                      <div className="icon-div">
                        <img src={cross} alt="CROSS" className="icon" />
                      </div>
                    </div>

                    <div className="sample-case-detail mt-5">
                      <b>Expected Output:</b> {test.expectedOutput}
                      <br />
                      <b>Obtained Output:</b> {test.obtainedOutput}
                      <br />
                      <b>Error:</b> {test.error ? test.error : "No error"}
                    </div>
                  </div>
                </>
              );
            }
            if (test.remarks === "Time limit exceeded") {
              return (
                <>
                  <div className="d-flex flex-row justify-content-around">
                    <div className="case-box">
                      <div className="test-case-box">Sample Test Case</div>
                      <div className="icon-div">
                        <img src={cross} alt="CROSS" className="icon" />
                      </div>
                    </div>

                    <div className="sample-case-detail">TIMEOUT ERROR</div>
                  </div>
                </>
              );
            }
            return (
              <>
                <div className="d-flex flex-row justify-content-around">
                  <div className="case-box">
                    <div className="test-case-box">Sample Test Case</div>
                    <div className="icon-div">
                      <img src={tick} alt="CROSS" className="icon" />
                    </div>
                  </div>
                </div>
              </>
            );
          }
          return (
            <>
              <div style={{marginLeft: "2.7rem"}} >
                <div className="case-box">
                  <div className="test-case-box">Test Case {i + 1}</div>
                  <div className="icon-div">
                    <img
                      src={
                        test.remarks === "Fail" ||
                        test.remarks === "Time limit exceeded"
                          ? cross
                          : tick
                      }
                      alt="CROSS"
                      className="icon"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div
          className={`${
            compilerResponse.tests.find(
              (test) =>
                test.remarks === "Fail" ||
                test.remarks === "Time limit exceeded"
            )
              ? "red"
              : "green"
          } result`}
        >
          {compilerResponse.tests.find(
            (test) =>
              test.remarks === "Fail" || test.remarks === "Time limit exceeded"
          )
            ? "SUBMISSION UNSUCCESSFUL"
            : "SUBMISSION SUCCESSFUL"}
        </div>
      </div>
    );
  };
  return renderTestCaseBox();
};

export default TestCaseBox;
