import { useEffect, useState } from "react";

import { TimerProps } from "../types/types";

export default function Timer({
  socket,
  setMoveChosen,
  defineStatus,
  setOppMove,
  setStatus,
  setGameBreak,
  gameBreak,
  oppMove,
  gameEnded,
}: TimerProps) {
  const [counter, setCounter] = useState(10);
  const [dsCalled, setDsCalled] = useState(0);

  useEffect(() => {
    socket.on("startTimer", (time) => {
      setGameBreak(false);
      setCounter(Number(time));
      setMoveChosen(false);
    });
  }, [socket]);

  useEffect(() => {
    if (gameBreak && dsCalled === 0) {
      defineStatus();
      setDsCalled((prev) => prev + 1);
    }
    const interval = setInterval(() => {
      if (!gameEnded) {
        setCounter((prev: number) => {
          if (prev === 0) {
            if (!gameBreak) {
              setGameBreak(true);
              return 5;
            } else {
              setGameBreak(false);
              setMoveChosen(false);
              setOppMove("");
              setStatus("");
              setDsCalled(0);
              return 10;
            }
          } else {
            return prev - 1;
          }
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameBreak, gameEnded, counter, oppMove, dsCalled]);

  return <h1 className="text-4xl font-bold">{counter}</h1>;
}
