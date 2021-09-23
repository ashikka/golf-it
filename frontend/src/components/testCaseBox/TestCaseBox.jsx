/* eslint-disable react/prop-types */
import React from 'react';

import tick from '../../assets/tick.png'
import cross from '../../assets/cross.png';

import './TestCaseBox.css';

const TestCaseBox = ({ status, compilerResponse }) => {
  const renderTestCaseBox = () => {
    if (status === 'hidden') {
      return null;
    }
    if (status === 'compiling') {
      return <div className="compiling-box">COMPILING...</div>;
    }
    return (
      <div className="text-case-div">
        {compilerResponse.tests.map((test, i) => {
          if (i === 0) {
            if (test.remarks === 'Fail') {
              return (
                <>
                  <div className="case-box">
                    <div className="test-case-box">
                      Sample Test Case
                    </div>
                    <div className="icon-div">
                      <img
                        src={cross}
                        alt="CROSS"
                        className="icon"
                      />
                    </div>
                  </div>

                  <div className="sample-case-detail">
                    Expected Output:
                    <br />
                    {test.expectedOutput}
                    <br />
                    <br />
                    Obtained Output:
                    <br />
                    {test.obtainedOutput}
                    <br />
                    <br />
                    Error:
                    <br />
                    {test.error ? test.error : 'No error'}
                  </div>
                </>
              );
            } if (test.remarks === 'Time limit exceeded') {
              return (
                <>
                  <div className="case-box">
                    <div className="test-case-box">
                      Sample Test Case
                    </div>
                    <div className="icon-div">
                      <img
                        src={cross}
                        alt="CROSS"
                        className="icon"
                      />
                    </div>
                  </div>

                  <div className="sample-case-detail">
                    TIMEOUT ERROR
                  </div>
                </>
              );
            }
            return (
              <div className="case-box">
                <div className="test-case-box">
                  Sample Test Case
                </div>
                <div className="icon-div">
                  <img
                    src={tick}
                    alt="CROSS"
                    className="icon"
                  />
                </div>
              </div>
            );
          }
          return (
            <div className="case-box">
              <div className="test-case-box">
                Test Case
                {' '}
                {i + 1}
              </div>
              <div className="icon-div">
                <img
                  src={test.remarks === 'Fail' || test.remarks === 'Time limit exceeded' ? cross : tick}
                  alt="CROSS"
                  className="icon"
                />
              </div>
            </div>
          );
        })}
        <div
          className={`${
            compilerResponse.tests.find(
              (test) => test.remarks === 'Fail' || test.remarks === 'Time limit exceeded',
            )
              ? 'red'
              : 'green'
          } result`}
        >
          {compilerResponse.tests.find(
            (test) => test.remarks === 'Fail' || test.remarks === 'Time limit exceeded',
          )
            ? 'SUBMISSION UNSUCCESSFUL'
            : 'SUBMISSION SUCCESSFUL'}
        </div>
      </div>
    );
  };
  return renderTestCaseBox();
};

export default TestCaseBox;