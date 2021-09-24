export default {
  listen: {
    CONNECTION: "connection",
    PLAYER: {
      JOIN: "player:join",
      TYPE: "player:type",
      REJOIN: "player:rejoin",
      SUCCESS: "player:success",
    },
    ROOM: {
      CONNECT: "room:connected",
      TYPE: "room:type",
    }
  },

  emit: {
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