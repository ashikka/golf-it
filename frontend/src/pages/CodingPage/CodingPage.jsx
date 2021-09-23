import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AceEditor from "react-ace";
import { Dropdown, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
// import TestCaseBox from '../../components/testcase/testcase';
import api from "../../api";
import { getQuestionsThunk } from "../../redux/slices/questionSlice";

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
import "ace-builds/src-noconflict/ext-language_tools";
import HomeButton from "../../assets/home-icon.png";
import "./CodingPage.scss";

const QuestionPage = () => {
  const [tempCompilerResponse, setTempCompilerResponse] = useState({});
  const [testCaseBoxStatus, setTestCaseBoxStatus] = useState("hidden");
  const [compilerResponse, setCompilerResponse] = useState({});

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getQuestionsThunk());
  }, [dispatch, questions]);

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

  const [language, setLanguage] = useState("Select");
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
    api.onRoomType(set__code)
  }, [])

  const submitSolution = async () => {
    setTempCompilerResponse({ status: "compiling", tests: [] });
    const res = await api.executeCode({
      //   questionName: question.questionName,
      code,
      language,
      submitTime: Date.now(),
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
    <>
      <Row className="d-flex mt-5" style={{ textAlign: "left" }}>
        <Link to="/">
          <img src={HomeButton} alt="home-button.svg" className="home-button" />
        </Link>
      </Row>
      <Row className="d-flex mt-5" style={{ textAlign: "left" }}>
        {questions.data != null ? (
          <h1>{questions.data.data.questions[0].questionName}</h1>
        ) : (
          <></>
        )}
      </Row>
      <Row className="d-flex mt-2" style={{ textAlign: "left" }}>
        {questions.data != null ? (
          <p>
            {" "}
            <ReactMarkdown children={questions.data.data.questions[0].question} />
          </p>
        ) : (
          <></>
        )}
      </Row>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div>
          <b>Characters:</b> {characters}
        </div>

        <div className="d-flex flex-row align-items-center w-50">
          <span className="mt-2">
            <b>Language:</b> &nbsp;
          </span>
          <Dropdown className="">
            <Dropdown.Toggle className="dropbtn" id="dropdown-basic">
              {language}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-content">
              {langList.map((lang) => (
                <Dropdown.Item onClick={(e) => setLanguage(e.target.text)}>
                  {lang}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Row className="mt-5">
        <AceEditor
          height={700}
          width={900}
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
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </Row>
      <Row className="justify-content-start p-5">
        <Button
          style={{ width: "8rem" }}
          type="button"
          className="submit-button"
          onClick={onSubmit}
        >
          Run
        </Button>
        {/* <TestCaseBox
            status={testCaseBoxStatus}
            compilerResponse={compilerResponse}
          /> */}
      </Row>
    </>
  );
};

export default QuestionPage;
