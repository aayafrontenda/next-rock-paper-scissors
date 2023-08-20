import { Dispatch, ReactNode, SetStateAction } from "react";
import { Socket } from "socket.io-client";

export type Language = "en" | "kz" | "ru";

export type LanguageProviderProps = {
  children: ReactNode;
};

export type LanguageContextType = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export type ThemeProviderProps = {
  children: ReactNode;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export interface StartScreenEventsMap {
  joinRoom: ({ nickname }: { nickname: string | undefined }) => void;
}

export interface TimerEventsMap {
  startTimer: (time: number) => void;
}

export interface CustomSelectProps {
  id: string;
  defaultValue: string;
  values: string[];
  ref: any;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

export interface TimerProps {
  socket: Socket<TimerEventsMap, TimerEventsMap>;
  setMoveChosen: Dispatch<SetStateAction<boolean>>;
  defineStatus: () => void;
  setOppMove: Dispatch<SetStateAction<Move>>;
  setStatus: Dispatch<SetStateAction<string>>;
  setGameBreak: Dispatch<SetStateAction<boolean>>;
  gameBreak: boolean;
  oppMove: string;
  gameEnded: boolean;
}

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
