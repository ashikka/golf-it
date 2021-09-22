import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto, { randomBytes } from 'crypto';

require('dotenv').config();

// --------------------------
/**
 * 
 */

const server = express();
const PORT = 4000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
})

import Router from './routes/router';

server.use(Router);
server.listen(PORT, console.log.bind(this, `[Starting] Bind PORT ${PORT}`));

// --------------------------
/**
 * 
 */

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import uuid from 'uuid';

import PlayerHandler from './sockets/players';

const sockets = express();
const __https = createServer(sockets);

const io = new Server(__https);

io.engine.generateId = uuid.v4

io.use((socket: Socket, next) => {
  // Auth
  next()
})

io.on('connection', (socket: Socket) => {
  // socket.
  io.of('/player').on('connection', PlayerHandler(io))
});

__https.listen(4050);