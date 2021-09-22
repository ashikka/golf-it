import express from "express";

const router = express.Router();

router.use((_,__,next)=>{
  next()
})

export default router;