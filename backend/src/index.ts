import express from 'express';
import cors from 'cors';

require('dotenv').config();

// --------------------------
/**
 * REST Server
 */

const server = express();
const HTTPPORT = parseInt(process.env.REST_PORT || "4000");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors())

server.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
})

import rooms from './routes/rooms';
import code from './routes/code';

server.use('/room', rooms);
server.use('/code', code);
server.listen(HTTPPORT, console.log.bind(this, `[Starting] Bind PORT ${HTTPPORT}`));

// --------------------------
/**
 * Socket Server
 */

import { Server, Socket } from 'socket.io';
import EVENTS from './sockets/events';
import PlayerHandler from './sockets/players';
import RoomHandler from './sockets/rooms';

const SOCKPORT = parseInt(process.env.SOCK_PORT || "4050");
const { listen, emit } = EVENTS;

const sock = new Server(SOCKPORT, {
  cors: { origin: "*", allowedHeaders: "*", methods: "*" },
});

console.log(`[Starting] Socket PORT ${SOCKPORT}`)

sock.on(listen.CONNECTION, (socket: Socket) => {
  socket.emit(emit.WELCOME, "key")
});

sock.of('/player').on(listen.CONNECTION, PlayerHandler)
sock.of('/room').on(listen.CONNECTION, RoomHandler)
