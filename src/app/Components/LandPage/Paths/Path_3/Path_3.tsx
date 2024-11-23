"use client";

import "./Path_3.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Path_3 = () => {
  const [windowWidth, setWindowWidth] = React.useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth !== null) {
      gsap.to(".path3", {
        scrollTrigger: {
          trigger: ".team",
          start: "0% center",
          end: "200% bottom",
          scrub: 1.5,
          markers: false,
        },
        strokeDasharray: "3000",
        strokeDashoffset: 600,
        duration: 1,
      });
    }
  }, [windowWidth]);

  // Return null during initial render to avoid hydration mismatch
  if (windowWidth === null) {
    return null;
  }
  if (windowWidth > 1555) {
    return (
      <>
        <svg
          width="1920"
          height="1935"
          viewBox="0 0 1920 1935"
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
          height="1935"
          viewBox="0 0 1920 1935"
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
  } else if (windowWidth > 555) {
    return <></>;
  } else {
    return null; // or a mobile-specific SVG
  }
};

export default Path_3;
