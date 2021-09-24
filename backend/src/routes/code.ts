import express from "express";
import { firestore } from "../firebase";
import { submissionValidation } from "../utils/validation";
import executeCode from "./code-executor";

const code = express.Router();

export interface ICode {
  createdBy: string;
  population: number;
  players: string[];
  [x: string]: any;
}

interface TestcaseSchema {
  inputs: string[];
  outputs: string[];
  questionName: string;
}

code.get("/", (req, res) => {
  res.sendStatus(200);
});

code.get("/:resultId", async (req, res) => {
  res.sendStatus(200);
});

code.post("/submission/:questionName", async (req, res) => {
  const { questionName } = req.params;
  const { code, language, submitTime } = req.body;

  const valid = submissionValidation.validate({
    questionName,
    code,
    language,
    submitTime,
  });

  if (valid.error) {
    return res.status(400).json({
      success: true,
      error: "validationError",
      message: valid.error.message,
    });
  }

  const testcases = (
    await firestore.collection("testcases").doc(questionName).get()
  ).data() as unknown as TestcaseSchema;
  console.log(testcases);

  if (testcases) {
    const inputArray = testcases.inputs;
    const outputArray = testcases.outputs;

    const testCasesCE: { input: string; output: string }[] = [];

    inputArray.forEach((input, i) => {
      const obj = { input: "", output: "" };
      obj.input = input.replace(/\r/g, "");
      obj.output = outputArray[i].replace(/\r/g, "");
      testCasesCE.push(obj);
    });

    const compilerResponse = await executeCode(language, code, testCasesCE);

    compilerResponse.tests = compilerResponse.tests.map(
      (test: { input: string; expectedOutput: string }, i: number) => {
        if (i == 0) {
          return test;
        }
        test.input = "";
        test.expectedOutput = "";
        return test;
      }
    );

    console.log("COMPILER RESPONSE: ", compilerResponse);
    const allTestCasesPass = compilerResponse.tests.every((test: any) => test.remarks === "Pass") 

    if (allTestCasesPass) {
      return res.status(200).json({
        status: "success",
        message: "Submission Successful",
        compilerResponse,
      });
    }
    return res.status(200).json({
      status: "failure",
      message: "Did not pass all testcases",
      compilerResponse,
    });
  }
  res.sendStatus(200);
});

export default code;
