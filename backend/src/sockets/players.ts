import { Socket } from "socket.io";
import events from "./events";

const { listen, emit } = events;

const PlayerHandler = (player: Socket) => {
  /**
   * Assign client ID to user
   */
  player.emit(emit.PLAYER.CONNECTED, 'clientId-a32fd35fd253');

  /**
   * When player requests to join a room, check
   * if room exists, join them to the room.
   */
  player.on(listen.PLAYER.JOIN, (roomId: string, clientId: string) => {
    // Check if room and client exist in the DB
    clientId = roomId + roomId;

    // If yes, join
    // player.emit(JOIN, clientId);
    player.join(roomId);
    player.emit(emit.ROOM.JOINED, clientId);
  })

  /**
   * When the player sends a type event, check for
   * room and broadcast to that room.
   */
  player.on(listen.PLAYER.TYPE, (roomId: string, code: string) => {
    if (!roomId)
      return player.emit(emit.ERROR, 'No room id provided')

    player.to(roomId).emit(emit.ROOM.TYPE, code)
  })
}

export default PlayerHandler;