import Image from "next/image";
import { useRef, useState, useEffect, SetStateAction, Dispatch } from "react";
import translations from "../translations/translations.json";
import { useLanguage } from "../context/LanguageContext";
import { Socket } from "socket.io-client";
import { StartScreenEventsMap } from "../types/types";

export default function StartScreen({
  socket,
  setGameStarted,
}: {
  socket: Socket<StartScreenEventsMap, StartScreenEventsMap>;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}) {
  const { language } = useLanguage();
  const [langTranslations, setLangTranslations] = useState(translations["en"]);

  useEffect(() => {
    setLangTranslations(translations[language]);
  }, [language]);

  const nicknameRef = useRef<HTMLInputElement>(null);

  const joinRoom = () => {
    setGameStarted(true);
    console.log("socket", socket);
    socket.emit("joinRoom", { nickname: nicknameRef?.current?.value });
  };
  return (
    <div className="my-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-violet-800 bg-opacity-25 dark:bg-black dark:bg-opacity-25"></div>
      <div className="bg-white flex items-center flex-col gap-4 p-6 rounded-xl relative dark:bg-slate-800 transition-all duration-300">
        <h1>{}</h1>
        <div className="flex gap-4 justify-center">
          <div className="hover:bg-gray-30 transition-all duration-300 animate-spin">
            <Image
              src="/assets/gameIcons/rock.svg"
              height={30}
              width={30}
              alt="rock image"
            />
          </div>
          <div className="hover:bg-gray-30 transition-all duration-300 animate-pulse">
            <Image
              src="/assets/gameIcons/paper.svg"
              height={30}
              width={30}
              alt="paper image"
            />
          </div>
          <div className="text-white hover:bg-gray-30 transition-all duration-300 animate-spin">
            <Image
              src="/assets/gameIcons/scissors.svg"
              height={30}
              width={30}
              alt="scissors image"
            />
          </div>
        </div>
        <input
          className="py-4 text-center border-2 border-gray-400 border-opacity-30 px-8 bg-white placeholder:text-gray-500 rounded font-extrabold outline-none transition-all duration-300 w-full"
          placeholder={langTranslations.nickname}
          ref={nicknameRef}
        />
        <button
          className="py-4 px-8 bg-gray-800 dark:bg-violet-500 dark:text-white text-white rounded w-full font-extrabold hover:-translate-y-2 transition-all duration-300 hover:bg-violet-500 hover:bg-opacity-80 outline-none"
          onClick={joinRoom}
        >
          {langTranslations.readyToPlay}
        </button>
      </div>
    </div>
  );
}
