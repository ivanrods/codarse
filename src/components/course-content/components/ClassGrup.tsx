"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Class } from "./Class";
import { useState } from "react";

export interface IClassGrupProps {
  title: string;
  courseId: string;
  classes: {
    id: string;
    title: string;
  }[];
}

export const ClassGrup = ({ classes, courseId, title }: IClassGrupProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center  gap-6 p-4 bg-neutral-800"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <MdKeyboardArrowDown size={24} />
        ) : (
          <MdKeyboardArrowRight size={24} />
        )}

        {title}
      </button>
      <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
        {classes.map(({ id, title }) => (
          <li key={id}>
            <Class title={title} playerUrl={`/player/${courseId}/${id}`} />{" "}
          </li>
        ))}
      </ol>
    </>
  );
};
