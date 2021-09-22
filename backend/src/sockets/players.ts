import { Server, Socket } from "socket.io";

const PlayerHandler = (server: Server) => (player: Socket) => {
  // player.on('player:new', (clientId: string) => {
    
  // })

  player.on('player:join', (room: string) => {
    /**
     * When player requests to join a room, check
     * if room exists, then create a client ID and
     * and reply with this.
     */

    const clientId = String();

    player.join(room);
    player.emit(clientId);
  })

  // auth
  // player.use()

  player.on('player:type', (code: string, room: string) => {
    /**
     * When a joined player types, send that code to everyone
     * in the room.
     */
    server.to(room).emit(code)
  })
}

export default PlayerHandler;