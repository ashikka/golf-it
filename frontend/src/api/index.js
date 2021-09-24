import axios from "axios";
import { io } from "socket.io-client";
import res from "./question";
import events from "./events";

export const { listen, emit } = events;

class Client {
  rest;
  sock;

  room;
  _rid;

  constructor() {
    this.rest = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:4000",
      responseType: "json",
    });

    this.sock = io("http://localhost:4050/player");
    this.sock.on(listen.PLAYER.CONNECTED, (cid) => {
      const _client = localStorage.getItem("PREV_CLIENT_ID");
      if (!_client) localStorage.setItem("PREV_CLIENT_ID", cid);
      else {
        this.sock.id = _client;
        this.sock.connect();
      }

      console.log("[SOCK] (Connected)", this.sock.id);
    });

    this.sock.on(listen.ERROR, console.error.bind(Client, "[SOCK] (Error)"));
  }

  get socket() {
    return this.sock;
  }

  get clientID() {
    return this.socket.id;
  }

  /**
   * @param {string} clientId String recieved from socket on connect
   * @param {Object} payload Object with any keys you want to add to firestore
   * @returns {Promise<string>} Room ID
   */
  async createRoom(payload = {}) {
    return (
      await this.rest.post("/room/create", { clientId: this.clientID, payload })
    ).data;
  }

  /**
   * @param {string} roomID Room ID
   * @returns {Promise<any>} Room data
   */
  async findRoom(roomID) {
    if (!roomID) return {};

    return (await this.rest.get(`/room/${roomID}`)).data;
  }

  /**
   * @param {string} category Category string
   * @returns Array
   */
  async getQuestions(category = undefined) {
    // const { questions } = Q;

    // if (category)
    //   return questions.filter(({ category: c }) => c === category)

    return res;
  }

  /**
   * @param {string} category Category string
   * @returns {Object} Question
   */
  async getQuestionByID(qid) {
    return res.data.questions.filter(({ id }) => id === qid).shift();
  }

  /**
   * @todo Execute call
   */
  async executeCode({ questionName, code, language, submitTime }) {
    return this.rest.post(`/code/submission/${questionName}`, {
      code,
      language,
      submitTime,
    });
  }

  /**
   * Register a function event listener
   * @param {string} event Event to listen to
   * @param {function} callback Callback to invoke
   */
  registerListener(event, callback) {
    return this.sock.on(event, callback);
  }

  /**
   * Join a socket room
   * @param {string} roomId Room ID
   */
  async joinRoom(roomId) {
    const room = await this.findRoom(roomId);
    this.sock.emit(emit.PLAYER.JOIN, roomId);

    this.room = room;
    this._rid = roomId;
    return room;
  }

  async typeRoom(code) {
    this.sock.emit(emit.PLAYER.TYPE, this._rid, code);
  }

  /**
   * Do something when someone types in the room.
   * @param {function} cb Callback
   */
  onRoomType(cb) {
    return this.registerListener(listen.ROOM.TYPE, cb);
  }

  /**
   * Do something when a room is joined
   * @param {function} cb Callback
   */
  onRoomJoin(cb) {
    return this.registerListener(listen.ROOM.JOINED, cb);
  }
}

const api = new Client();
export default api;
