import { Socket } from "socket.io";
import events from "./events";
import { firestore } from "../firebase";
import { IRoom } from "../routes/rooms";

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
  player.on(listen.PLAYER.JOIN, async (roomId: string) => {
    // Check if room and client exist in the DB
    if (!roomId)
      return player.emit(emit.ERROR, "No room id provided")

    const room = await firestore.collection("rooms").doc(roomId).get();

    if (room.exists) {
      let { population, players } = (room.data() || {}) as IRoom;

      // if (population >= 2)
      //   return player.emit(emit.ERROR, "Room full")

      player.join(roomId);
      player.to(roomId).emit(emit.ROOM.JOINED, player.id);

      players = players.filter((id: string) => id !== player.id);
      players = [ ...players, player.id ];

      firestore.collection("rooms").doc(roomId).update({
        players, population: players.length,
      });
    } else {
      return player.emit(emit.ERROR, "Room doesn't exist")
    }
  })
  
  /**
   * If player disconnects and wants to rejoin
   * the room they were previously in.
   */
  player.on(listen.PLAYER.REJOIN, async (roomId: string, prevClientId: string) => {
    // Check if room and client exist in the DB
    if (!roomId)
      return player.emit(emit.ERROR, "No room id provided")

    const room = await firestore.collection("rooms").doc(roomId).get();

    if (room.exists) {
      let { players } = (room.data() || {}) as IRoom;

      if (players.includes(prevClientId)) {
        player.join(roomId);
        player.to(roomId).emit(emit.ROOM.JOINED, player.id);

        players = players.filter((id: string) => id !== prevClientId);
        players = [ ...players, player.id ];
      } else {
        return player.emit(emit.ERROR, "This is not your room")
      }

      firestore.collection("rooms").doc(roomId).update({
        players, population: players.length,
      });
    } else {
      return player.emit(emit.ERROR, "Room doesn't exist")
    }
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