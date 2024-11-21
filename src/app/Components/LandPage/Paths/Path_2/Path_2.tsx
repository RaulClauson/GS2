"use client";

import "./Path_2.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Path_2 = () => {
  useEffect(() => {
    gsap.to(".path2", {
      scrollTrigger: {
        trigger: ".slide",
        start: "-10% top",
        end: "100% bottom",
        scrub: 1.5,
        markers: false,
      },
      strokeDasharray: "2000",
      strokeDashoffset: 950,
      duration: 1,
    });
  }, []);
  return (
    <>
      {/*       <svg
        width="22"
        height="100lvh"
        viewBox="0 0 22 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="path_2"
      >
        <path
          d="M11 0V1000"
          stroke="#00E768"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="path2"
          style={{ strokeDasharray: "2000", strokeDashoffset: "2000" }}
        />
      </svg>
      <svg
        width="22"
        height="100lvh"
        viewBox="0 0 22 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="path_2_2"
      >
        <path
          d="M11 0V1000"
          stroke="#172E21"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
    </>
  );
};

export default Path_2;