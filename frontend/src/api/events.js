/* eslint-disable import/no-anonymous-default-export */
export default {
  emit: {
    CONNECTION: "connection",
    PLAYER: {
      JOIN: "player:join",
      TYPE: "player:type",
      REJOIN: "player:rejoin",
      SUCCESS: "player:success",
    }
  },

  listen: {
    WELCOME: "welcome",
    ERROR: "player:error",
    ACK: "player:ack",
    PLAYER: {
      CONNECTED: "player:connected",
    },
    ROOM: {
      JOINED: "room:joined",
      TYPE: "room:type",
      SUCCESS: "room:success",
    }
  }
}