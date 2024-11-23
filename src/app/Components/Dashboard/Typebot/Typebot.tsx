"use client";

import { Standard } from "@typebot.io/nextjs";
import "./Typebot.css";
import { useState, useEffect, useRef } from "react";

const Typebot = () => {
  const [height, setHeight] = useState("180px");
  const [isOut, setIsOut] = useState(false);
  const typebotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typebotRef.current &&
        !typebotRef.current.contains(event.target as Node)
      ) {
        setIsOut(true);
        setHeight("180px");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={typebotRef}
      className={`typebot${isOut ? " out" : ""}`}
      style={{ height }}
      onClick={() => {
        setIsOut(false);
        setHeight("560px");
      }}
    >
      <Standard
        typebot="my-typebot-7j8n87b"
        style={{ width: "100%", height: "800px" }}
      />
    </div>
  );
};

export default Typebot;
