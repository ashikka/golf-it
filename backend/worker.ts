import { Worker } from "code-executor";

const worker = new Worker("myExecutor", "redis://127.0.0.1:6379");

const startWorker = async () => {
  try {
    await worker.build([
      "Python",
      "Bash",
      "C",
      "Cplusplus",
      "Ruby",
      "Javascript",
      "Java",
      "Perl",
      "Swift",
      "Rust",
    ]);
    worker.start();
  } catch (error) {
    console.log(error);
  }
};
startWorker();
