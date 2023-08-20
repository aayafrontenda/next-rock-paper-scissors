"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import Image from "next/image";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

import { useLanguage } from "./context/LanguageContext";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomSelect from "./components/CustomSelect";
config.autoAddCss = false;
export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { setLanguage } = useLanguage();

  return (
    <div className={`${theme} w-full h-full flex flex-col items-center`}>
      <Image
        src="/assets/bgShapes/home.webp"
        height={1080}
        width={720}
        alt="light theme background"
        className={`opacity-100 dark:opacity-0 absolute object-cover transition-opacity duration-300 w-full h-full`}
        priority
      />
      <Image
        src="/assets/bgShapes/darkHome.webp"
        height={1080}
        width={720}
        alt="dark theme background"
        className={`dark:opacity-100 opacity-0 absolute object-cover transition-opacity duration-300 w-full h-full`}
        priority
      />
      <div className="relative p-6 z-10 w-full h-full flex flex-col lg:flex-row justify-center items-center">
        <div className="flex">
          <button
            className="lg:absolute outline-none w-10 h-10 flex justify-center items-center rounded lg:top-0 lg:left-[95%] m-4 dark:bg-white dark:text-white bg-black text-black z-10 ml-auto self-start transition-all duration-300"
            onClick={toggleTheme}
          >
            {
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="text-white dark:text-violet-500"
              />
            }
          </button>
          <div className="lg:mr-24 font-bold lg:absolute w-10 h-10 flex justify-center text-center items-center rounded top-0 left-[90%] z-10 m-4">
            {/*
              <button
                className="absolute w-10 h-10 flex justify-center items-center rounded top-0 left-[95%] m-4 dark:bg-white dark:text-white bg-black text-black z-10 ml-auto self-start transition-all duration-300"
                onClick={toggleTheme}
              ></button>
              */}
            <CustomSelect
              id="language-select"
              defaultValue="en"
              values={["en", "kz", "ru"]}
              ref={null}
              setLanguage={setLanguage}
            />
          </div>
        </div>
        {!gameStarted ? (
          <StartScreen socket={socket} setGameStarted={setGameStarted} />
        ) : (
          <Game socket={socket} setGameStarted={setGameStarted} />
        )}
      </div>
    </div>
  );
}
