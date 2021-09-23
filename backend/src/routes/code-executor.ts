import { CodeExecutor } from "code-executor";

const codeExecutor = new CodeExecutor("myExecutor", "redis://127.0.0.1:6379");

const executeCode = async (language: any, code: any, testCases: any) => {

  const input = {
    language,
    code,
    testCases,
    timeout: 2,
  };

  const results = (await codeExecutor.runCode(input)) as any;
  return results;
};

export default executeCode;
