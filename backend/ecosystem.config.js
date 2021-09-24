module.exports = {
  apps : [
    {
      name   : "backend",
      script : "./build/src/index.js",
      exec_mode: "fork",
      max_memory_restart: "1G",
      max_restarts: 5,
      instances: 1
    },
    {
      name   : "worker",
      script : "./build/worker.js",
      exec_mode: "fork",
      max_memory_restart: "1G",
      max_restarts: 5,
      instances: 1
    }
  ]
}