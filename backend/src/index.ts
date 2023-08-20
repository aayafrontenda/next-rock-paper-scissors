const express = require("express");
const cors = require("cors");
const app = express();

const http = require("http");

import { Server, Socket } from "socket.io";

import { Room, UserInfo } from "./src/types/types";

/*
interface CustomSocket<T, T1> extends Socket {
  to: (room: number | null) => Socket;
  join: (room: string | number) => void;
  leave: (room: number | null) => void;
  broadcast: CustomSocket<ServerEventsMap, ServerEventsMap>;
}
*/

interface ServerEventsMap {
  blockPlayer: (playerId: string) => void;
  continueRound: () => void;
  joinRoom: (data: { nickname: string }) => void;
  receiveMove: (move: string) => void;
  leaveRoom: () => void;
  makeMove: (move: string) => void;
  win: () => void;
  lose: () => void;
  getUserInfo: (userInfo: UserInfo) => void;
}

app.use(cors());

const server = http.createServer(app);

const PLAYERS_MAX_COUNT = 2;
const MOVE_TIME = 1000;
const users: Record<string, UserInfo> = {};
const rooms: Room[] = [];
for (let i = 0; i < 100; i++) {
  rooms.push({
    cap: PLAYERS_MAX_COUNT,
    booked: 0,
    players: [],
    started: false,
  });
}

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
} as any);

io.on("connection", (socket: Socket<ServerEventsMap, ServerEventsMap>) => {
  users[socket.id] = {
    id: socket.id,
    nickname: "",
    wins: 0,
    all: 0,
    currentRoom: null,
    blacklist: [],
  };

  socket.on("blockPlayer", (playerId) => {
    users[socket.id].blacklist.push(playerId);
  });

  socket.on("continueRound", () => {
    const room = users[socket.id].currentRoom;
    if (!room) return;
    io.in(room.toString()).emit("startTimer", 10);
  });

  socket.on("joinRoom", (data) => {
    // console.log("data about room", data);
    /*
    const freeRooms = rooms.filter(
      (r) =>
        r.booked < r.cap &&
        !r.started &&
        !users[socket.id].blacklist.includes(r.players[0]?.id)
    );
    */
    // // console.log("freeRooms", freeRooms);
    const randomRoom = 1;
    // Math.floor(Math.random() * freeRooms.length);
    // console.log("randomRoom", randomRoom);

    if (randomRoom !== undefined) {
      users[socket.id].currentRoom = randomRoom;
      users[socket.id].nickname = data.nickname;
      rooms[randomRoom].booked++;

      rooms[randomRoom].players.push(users[socket.id]);

      // console.log("user before", users[socket.id]);
      // console.log("socket before", socket.id);

      // // console.log("rooms before disconnect", rooms);

      socket.join(randomRoom.toString());

      io.in(randomRoom.toString()).emit("getRoomInfo", {
        room: rooms[randomRoom],
        id: randomRoom,
      });

      socket.emit("getUserInfo", users[socket.id]);

      const interval = setInterval(() => {
        io.in(randomRoom.toString()).emit(
          "getCanStart",
          rooms[randomRoom].started
        );
      }, 1000);

      const interval1 = setInterval(() => {
        io.in(randomRoom.toString()).emit("getCanStart", {
          canStart: rooms[randomRoom].started,
        });
      }, 1000);

      if (rooms[randomRoom].booked === PLAYERS_MAX_COUNT) {
        rooms[randomRoom].started = true;
        clearInterval(interval);
        clearInterval(interval1);
        io.in(randomRoom.toString()).emit("startTimer", 10);
      }
    }
  });

  /*
  socket.on("endRound", (status) => {
    // io.in(randomRoom).emit("startTimer", 1000);
  });
  */

  socket.on("leaveRoom", () => {
    console.log(socket.id);
    console.log(users[socket.id]);
    console.log(users[socket.id].currentRoom);
    const room = users[socket.id]?.currentRoom;
    if (room) {
      rooms[room].booked--;
      users[socket.id].nickname = "";

      rooms[room].players = rooms[room].players.filter(
        (p) => p.id !== socket.id
      );
      rooms[room].started = false;

      socket.leave(room.toString());
      users[socket.id].currentRoom = null;
      console.log("LEFT ROOM");
    }
    // // console.log("room after disconenct", rooms);
  });

  socket.on("makeMove", (move) => {
    const room = users[socket.id]?.currentRoom;
    if (!room) return;
    socket.broadcast.to(room.toString()).emit("receiveMove", move);
  });

  socket.on("win", () => {
    users[socket.id].wins++;
    users[socket.id].all++;
    socket.emit("getUserInfo", users[socket.id]);
  });

  socket.on("lose", () => {
    users[socket.id].all++;
    socket.emit("getUserInfo", users[socket.id]);
  });
});

server.listen(3001, () => {
  console.log("server is running hehe");
});
