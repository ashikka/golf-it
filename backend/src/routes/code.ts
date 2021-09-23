import express from "express";
import { firestore } from "../firebase";

const code = express.Router();

export interface ICode {
  createdBy: string;
  population: number;
  players: string[];
  [x: string]: any;
}

code.get('/', (req, res) => {
  res.sendStatus(200);
})

code.get('/:resultId', async (req, res) => {
  
  res.sendStatus(200);
})

code.post('/exec', async (req, res) => {
  
  res.sendStatus(200);
})

export default code;