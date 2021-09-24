import { Socket } from "socket.io";
import events from "./events";

const { listen, emit } = events;

const RoomHandler = (room: Socket) => {  
  /**
   * When a joined player types, send that code to everyone
   * in the room.
   */
  room.on(listen.ROOM.TYPE, (code: string, roomId: string) => {
    room.to(roomId).emit(code)
  })
}

export default RoomHandler;