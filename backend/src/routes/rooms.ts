import express from "express";
import { firestore } from "../firebase";

const rooms = express.Router();

export interface IRoom {
  createdBy: string;
  population: number;
  players: string[];
  [x: string]: any;
}

rooms.get('/', (req, res) => {
  res.sendStatus(200);
})

rooms.get('/:roomId', async (req, res) => {
  const { roomId } = req.params;
  const room = await firestore.collection("rooms").doc(roomId).get();

  if (room.exists)
    return res.json(room.data());
  else
    return res.sendStatus(404);
})

rooms.post('/create', async (req, res) => {
  const { clientId, payload } = req.body;

  const room = await firestore.collection("rooms").add({
    createdBy: clientId,
    population: 0,
    players: [
      clientId
    ],
    ...payload
  })

  return res.status(200).send(room.id)
})

export default rooms;