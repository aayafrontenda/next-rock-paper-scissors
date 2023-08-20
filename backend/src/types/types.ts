export type Language = "en" | "kz" | "ru";

export type Theme = "light" | "dark";

export type Move = "rock" | "paper" | "scissors" | "";

export interface Room {
  cap: number;
  booked: number;
  players: UserInfo[];
  started: boolean;
}

export interface RoomInfo {
  room: Room;
  id: string;
}

export interface UserInfo {
  id: string;
  nickname: string;
  wins: number;
  all: number;
  currentRoom: number | null;
  blacklist: string[];
}

export interface GameEventsMap {
  continueRound: ({}) => void;
  win: ({}) => void;
  lose: ({}) => void;
  leaveRoom: ({}) => void;
  makeMove: (move: Move) => void;
  receiveMove: (move: Move) => void;
  getRoomInfo: (roomInfo: RoomInfo) => void;
  getUserInfo: (userInfo: UserInfo) => void;
  getCanStart: (canStart: boolean) => void;
  blockPlayer: ({ playerId }: { playerId: string | undefined }) => void;
}
