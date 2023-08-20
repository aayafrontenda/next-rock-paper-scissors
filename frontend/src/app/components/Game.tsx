"use client";
import Image from "next/image";
import Timer from "./Timer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import translations from "../translations/translations.json";
import { useLanguage } from "../context/LanguageContext";
import { Socket } from "socket.io-client";
import { GameEventsMap, Move, UserInfo, RoomInfo } from "../types/types";
export default function Game({
  socket,
  setGameStarted,
}: {
  socket: Socket<GameEventsMap, GameEventsMap>;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}) {
  const { language } = useLanguage();
  const [langTranslations, setLangTranslations] = useState(
    translations[language]
  );
  const [oppMove, setOppMove] = useState<Move>("");
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [roomInfo, setRoomInfo] = useState<RoomInfo>();
  const [canStart, setCanStart] = useState(false);
  const [moveChosen, setMoveChosen] = useState(false);
  const [move, setMove] = useState<Move>("");
  const [status, setStatus] = useState("");
  const [gameBreak, setGameBreak] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    setLangTranslations(translations[language]);
  }, [language]);

  const compareMoves = (user: Move, opp: Move) => {
    if (user === opp) return "draw";
    if (user === "rock" && opp === "scissors") return "win";
    if (user === "paper" && opp === "rock") return "win";
    if (user === "scissors" && opp === "paper") return "win";
    return "lose";
  };

  const continuePlaying = () => {
    socket.emit("continueRound", {});
    setGameEnded(false);
  };

  const defineStatus = () => {
    if (oppMove === "" && move === "") {
      disconnect();
    }

    if (oppMove === "") {
      setGameEnded(true);
      socket.emit("win", {});
      return;
    }
    if (move === "") {
      setGameEnded(true);
      socket.emit("lose", {});
      return;
    }
    const result = compareMoves(move, oppMove);
    if (result === "lose") {
      setStatus("Lose :(");
      setGameEnded(true);
      socket.emit("lose", {});
    } else if (result === "win") {
      setStatus("Win :)");
      setGameEnded(true);
      socket.emit("win", {});
    } else {
      setStatus("Draw :|");
      setGameEnded(false);
    }
  };

  const handleBlock = () => {
    const playerToBlock = roomInfo?.room?.players?.find(
      (x: UserInfo) => x.id !== socket.id
    );

    if (playerToBlock) {
      socket.emit("blockPlayer", {
        playerId: playerToBlock.id,
      });
    }

    disconnect();
  };

  const makeMove = (move: Move) => {
    setMoveChosen(true);
    setMove(move);
    socket.emit("makeMove", move);
  };

  const disconnect = () => {
    socket.emit("leaveRoom", {});
    setGameStarted(false);
  };

  useEffect(() => {
    socket.on("receiveMove", (move: Move) => {
      setOppMove(move);
    });

    socket.on("getRoomInfo", (data: RoomInfo) => {
      setRoomInfo(data);
    });

    socket.on("getUserInfo", (data: UserInfo) => {
      setUserInfo(data);
    });

    socket.on("getCanStart", (canStart: boolean) => {
      setCanStart(canStart);
    });
  }, [socket]);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 dark:bg-opacity-5 transition-all duration-300"></div>
      <div className="flex flex-col items-center justify-between h-full w-3/4 relative dark:text-white transition-all duration-300">
        <h1 className="text-4xl font-bold mb-0">
          {langTranslations.game} #
          <span className="text-violet-500">{roomInfo?.id}</span>
        </h1>
        <div className="flex gap-8 mb-0">
          <h2 className="text-2xl font-bold">
            <span className="text-violet-500">{userInfo?.wins}</span> /{" "}
            <span className="text-gray-500">{userInfo?.all}</span>
          </h2>
        </div>
        <div className="flex w-1/2 justify-center flex-wrap text-center">
          {roomInfo?.room?.players?.map((p: UserInfo, index: number) => (
            <span className="text-violet-900 dark:text-violet-500 text-2xl font-bold">
              {p.nickname}
              {index !== roomInfo?.room?.players?.length - 1 ? (
                <span className="text-lg mx-2 text-black dark:text-white">
                  vs
                </span>
              ) : (
                <></>
              )}
            </span>
          ))}
        </div>
        {canStart ? (
          <div className="flex flex-col gap-8 justify-center items-center">
            <Timer
              socket={socket}
              setMoveChosen={setMoveChosen}
              setOppMove={setOppMove}
              defineStatus={defineStatus}
              setStatus={setStatus}
              setGameBreak={setGameBreak}
              gameBreak={gameBreak}
              oppMove={oppMove}
              gameEnded={gameEnded}
            />
            {(gameBreak || gameEnded) && (
              <div className="flex flex-col gap-4 w-full items-center">
                <h1 className="text-4xl font-bold text-violet-500">{status}</h1>
                <Image
                  src={`/assets/gameIcons/${oppMove}.svg`}
                  width={50}
                  height={50}
                  alt="move image"
                  className="bg-violet-500 rounded-full w-35 h-35 p-2 bg-opacity-30"
                />
              </div>
            )}
            {gameEnded && (
              <div className="flex gap-4 text-lg w-3/4">
                <button
                  className="py-2 w-1/2 px-4 bg-slate-700 text-white rounded font-extrabold hover:-translate-y-2 transition-all duration-300 hover:bg-violet-500 hover:bg-opacity-80 outline-none"
                  onClick={() => continuePlaying()}
                >
                  Play Together Again
                </button>
                <button className="w-1/2 hover:font-bold" onClick={handleBlock}>
                  Block Opponent
                </button>
              </div>
            )}
            <div className="flex gap-4 lg:gap-16 justify-center items-center w-full h-full">
              <button
                className={`py-12 px-12 lg:py-12 lg:px-14 cursor-pointer text-white hover:bg-gray-100 transition-all duration-200 hover:-translate-y-2 rounded ${
                  move === "rock"
                    ? "bg-violet-400 dark:bg-violet-500"
                    : "bg-white dark:bg-slate-800"
                }`}
                onClick={() => makeMove("rock")}
                disabled={moveChosen}
              >
                <Image
                  src="/assets/gameIcons/rock.svg"
                  height={60}
                  width={60}
                  alt="rock image"
                />
              </button>
              <button
                className={`py-12 px-12 lg:py-12 lg:px-14 cursor-pointer text-white hover:bg-gray-100 transition-all duration-200 hover:-translate-y-2 rounded ${
                  move === "paper"
                    ? "bg-violet-400 dark:bg-violet-500"
                    : "bg-white dark:bg-slate-800"
                }`}
                onClick={() => makeMove("paper")}
                disabled={moveChosen}
              >
                <Image
                  src="/assets/gameIcons/paper.svg"
                  height={60}
                  width={60}
                  alt="paper image"
                />
              </button>
              <button
                className={`py-12 px-12 lg:py-12 lg:px-14 cursor-pointer text-white hover:bg-gray-100 transition-all duration-200 hover:-translate-y-2 rounded ${
                  move === "scissors"
                    ? "bg-violet-400 dark:bg-violet-500"
                    : "bg-white dark:bg-slate-800"
                }`}
                onClick={() => makeMove("scissors")}
                disabled={moveChosen}
              >
                <Image
                  src="/assets/gameIcons/scissors.svg"
                  height={60}
                  width={60}
                  alt="scissors image"
                />
              </button>
            </div>
          </div>
        ) : (
          <Image
            src="/assets/gameIcons/loading.svg"
            className="animate-spin my-auto dark:invert"
            alt="loading icon"
            width={100}
            height={100}
          />
        )}
        <button
          className="py-4 px-8 bg-red-800 text-white dark:bg-white dark:text-red-700 rounded w-48 font-extrabold hover:-translate-y-2 transition-all duration-300 hover:bg-violet-500 hover:bg-opacity-80 outline-none"
          onClick={disconnect}
        >
          {langTranslations.disconnect}
        </button>
      </div>
    </>
  );
}
