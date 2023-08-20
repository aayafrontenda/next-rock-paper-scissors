"use client";
import { CustomSelectProps, Language } from "../types/types";
import { useRef, useState, useId, useEffect, MouseEventHandler } from "react";
import ReactDOM from "react-dom";

function SelectModal({
  width,
  id,
  values,
  handleOptionClick,
}: {
  width: number;
  id: string;
  values: string[];
  handleOptionClick: MouseEventHandler;
}) {
  //to create a portal, use the createPortal function:
  const optionId = useId();
  if (typeof window === "object") {
    return ReactDOM.createPortal(
      <div
        className={`modal absolute mt-3 -ml-4 mb-0 `}
        style={{ width: width }}
      >
        <ul className="bg-white dark:bg-slate-800">
          {values.map((val: string, index: number) => (
            <li
              key={`${optionId}-${index}`}
              onClick={handleOptionClick}
              className="py-2 px-3 outline-none hover:bg-violet-500 hover:text-white cursor-pointer w-full"
            >
              {val}
            </li>
          ))}
        </ul>
      </div>,
      document.getElementById(id) as Element
    );
  }
  return null;
}

export default function CustomSelect({
  id,
  defaultValue,
  values,
  ref,
  setLanguage,
}: CustomSelectProps) {
  const [width, setWidth] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (
        !modalRef?.current?.innerHTML
          .toString()
          .toString()
          .includes((e?.target as Element).innerHTML)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", clickHandler);

    return () => {
      document.body.removeEventListener("click", clickHandler);
    };
  }, []);

  const manageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    const rect = target.getBoundingClientRect();
    const parentRect = target.parentElement?.getBoundingClientRect();
    if (!parentRect) return;
    setWidth(target.children.length !== 0 ? rect.width : parentRect.width);
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;
    setSelected((e?.target as Element).innerHTML);
    setLanguage((e?.target as Element).innerHTML as Language);
    setIsOpen(false);
  };

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white" ref={modalRef}>
      <div
        className="py-2 px-4 outline-none rounded-md cursor-pointer w-full"
        onClick={manageClick}
        id={id}
        ref={ref}
      >
        <span className="w-full flex">{selected}</span>
      </div>
      {isOpen && (
        <SelectModal
          width={width}
          id={id}
          handleOptionClick={handleOptionClick}
          values={values}
        />
      )}
    </div>
  );
}
