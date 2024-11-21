"use client";

import "./Path_3.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Path_3 = () => {
  useEffect(() => {
    gsap.to(".path3", {
      scrollTrigger: {
        trigger: ".team",
        start: "0% center",
        end: "200% center",
        scrub: 1.5,
        markers: false,
      },
      strokeDasharray: "3000",
      strokeDashoffset: 200,
      duration: 1,
    });
  }, []);
  return (
    <>
      <svg
        width="1920"
        height="1375"
        viewBox="0 0 1920 1375"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="path_3"
      >
        <path
          d="M960.998 24.5C960.997 471.5 445.498 248 306.496 545C94.997 996.901 1640.5 1044.5 1306 1336.5M1306 1336.5H1356M1306 1336.5V1290"
          stroke="#00E768"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path3"
          style={{ strokeDasharray: "3000", strokeDashoffset: "3000" }}
        />
      </svg>

      <svg
        width="1920"
        height="1375"
        viewBox="0 0 1920 1375"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="path_3"
      >
        <path
          d="M960.998 24.5C960.997 471.5 445.498 248 306.496 545C94.997 996.901 1640.5 1044.5 1306 1336.5M1306 1336.5H1356M1306 1336.5V1290"
          stroke="#00E768"
          strokeOpacity="0.1"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Path_3;
