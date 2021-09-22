import { Socket } from "socket.io";
import events from "./events";
import { firestore } from "../firebase";

const { listen, emit } = events;

const PlayerHandler = (player: Socket) => {
  /**
   * Assign client ID to user
   */
  player.emit(emit.PLAYER.CONNECTED, player.id);

  /**
   * When player requests to join a room, check
   * if room exists, join them to the room.
   */
  player.on(listen.PLAYER.JOIN, async (roomId: string, clientId: string) => {
    // Check if room and client exist in the DB
    if (!roomId)
      return player.emit(emit.ERROR, "No room id provided")

    const room = await firestore.collection("rooms").doc(roomId).get();

    if (room.exists) {
      let { population, players } = room.data() || {};

      if (population >= 2)
        return player.emit(emit.ERROR, "Room full")

      player.join(roomId);
      player.emit(emit.ROOM.JOINED, clientId);

      players = players.filter((id: string) => id !== clientId);

      firestore.collection("rooms").doc(roomId).update({
        population: ++population,
        players: [ ...players, clientId ]
      });
    } else {
      return player.emit(emit.ERROR, "Room doesn't exist")
    }

    // If yes, join
    // player.emit(JOIN, clientId);
  })

  /**
   * When the player sends a type event, check for
   * room and broadcast to that room.
   */
  player.on(listen.PLAYER.TYPE, (roomId: string, code: string) => {
    if (!roomId)
      return player.emit(emit.ERROR, "No room id provided")

    player.to(roomId).emit(emit.ROOM.TYPE, code)
  })
}

export default PlayerHandler;