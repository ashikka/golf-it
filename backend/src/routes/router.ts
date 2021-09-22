import express from "express";

const Router = express.Router();

Router.use((_,__,next)=>{
  next()
})

export default Router;