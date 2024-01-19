"use client";
import { useState } from "react";

export function Footnote(props: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  return (
    <span className="group/footnote cursor-pointer ml-[1px]">
      <span className="relative bottom-1.5 text-xs underline underline-offset-2">
        <span className="absolute invisible group-hover/footnote:visible  bg-black p-3 border border-gray-800 rounded-md whitespace-nowrap">
          {props.content}
        </span>
        <span></span>
        {props.children}
      </span>
    </span>
  );
}
