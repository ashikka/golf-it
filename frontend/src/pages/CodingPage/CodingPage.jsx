import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import { Dropdown, Row, Button, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import TestCaseBox from "../../components/testCaseBox/TestCaseBox";
import api from "../../api";

// import swal from "swal";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/ext-language_tools";
import "./CodingPage.scss";

const QuestionPage = () => {
  const [tempCompilerResponse, setTempCompilerResponse] = useState({});
  const [testCaseBoxStatus, setTestCaseBoxStatus] = useState("hidden");
  const [compilerResponse, setCompilerResponse] = useState({});

  const question = api.room.question;

  const langList = [
    "Bash",
    "Brainfuck",
    "C",
    "Cplusplus",
    "Golfscript",
    "Java",
    "Javascript",
    "O5ABE1",
    "Perl",
    "Python",
    "Ruby",
    "Rust",
    "Swift",
  ];

  const [language, setLanguage] = useState("Language");
  let mode = "";
  if (language === "C" || language === "Cplusplus") {
    mode = "c_cpp";
  } else {
    mode = language;
  }

  const [code, setCode] = useState(String());
  const [characters, setCharacter] = useState(0);

  const onChangeFunction = (value) => {
    // Emit my own typing input to socket room
    api.typeRoom(value);

    // Set state
    setCode(value);
    setCharacter(value.length);
  };

  // Competitor's code
  const [__code, set__code] = useState(String());

  // Listen to typing input from other person in room
  useEffect(() => {
    api.onRoomType(set__code);
  }, []);

  const submitSolution = async () => {
    setTempCompilerResponse({ status: "compiling", tests: [] });
    const res = await api.executeCode({
      questionName: question.questionName,
      code,
      language,
      submitTime: Date.now(),
      roomId: api._rid,
      clientId: api.clientID
    });
    setTempCompilerResponse(res.data.compilerResponse);
  };

  const onSubmit = () => {
    if (code.length === 0) {
      alert("Please enter your code");
    } else {
      submitSolution();
    }

    return null;
  };

  useEffect(() => {
    setCompilerResponse(tempCompilerResponse);
    if (compilerResponse.id) setTestCaseBoxStatus("results");
    else if (compilerResponse.status === "compiling")
      setTestCaseBoxStatus("compiling");
    else setTestCaseBoxStatus("hidden");
  }, [tempCompilerResponse, compilerResponse, testCaseBoxStatus]);

  return (
    <article id="code-page">
      <Row className="d-flex mt-5" style={{ textAlign: "left" }}>
        { question && <h1><b>{question.questionName}</b></h1> }
      </Row>

      <Row className="d-flex mt-2" style={{ textAlign: "left" }}>
        { question && <p><ReactMarkdown children={question.question} /></p> }
      </Row>

      <Row className="mt-5">
        <Col md={7} sm={12} style={{ minHeight: "50em" }}>
          <Row className="mb-3">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-row justify-content-start align-items-center">
                <Dropdown className="">
                  <Dropdown.Toggle className="dropbtn" id="dropdown-basic">
                    {language}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-content">
                    {langList.map((lang) => (
                      <Dropdown.Item
                        onClick={(e) => setLanguage(e.target.text)}
                      >
                        {lang}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <b>{characters} Characters</b>
              </div>
              <Button
                style={{ width: "8rem" }}
                type="button"
                className="submit-button"
                onClick={onSubmit}
              >
                Run
              </Button>
            </div>
          </Row>

          <Row style={{ width: "100%", margin: 0 }}>
            <AceEditor
              className="my-editor"
              value={code}
              onChange={onChangeFunction}
              mode={mode.toLowerCase()}
              theme="monokai"
              name="coding-space"
              highlightActiveLine
              showGutter
              fontSize={18}
              showPrintMargin={false}
              editorProps={{ $blockScrolling: false }}
              setOptions={{
                enableEmmet: true,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </Row>
        </Col>

        <Col md={1} sm={12} />

        <Col md={4} sm={12}>
          <div style={{ height: "4em", textAlign: "left" }}>
            <b>Competitor</b>
          </div>
          <AceEditor
            className="their-editor"
            value={__code}
            mode={mode.toLowerCase()}
            theme="chaos"
            name="coding-space-2"
            highlightActiveLine
            showGutter
            fontSize={16}
            showPrintMargin={false}
            editorProps={{ $blockScrolling: false }}
            setOptions={{
              enableEmmet: true,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </Col>
      </Row>

      <Row className="justify-content-start p-5">
        <div>
          <TestCaseBox
            status={testCaseBoxStatus}
            compilerResponse={compilerResponse}
          />
        </div>
      </Row>
    </article>
  );
};

export default QuestionPage;
