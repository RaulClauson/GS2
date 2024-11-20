"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./Inicio.css";
import Path_1 from "../Paths/Path_1/Path_1";

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  useEffect(() => {
    gsap.to(".image", {
      scrollTrigger: {
        trigger: "#inicio",
        start: "top top",
        end: "70% top",
        scrub: 1.5,
        markers: false,
      },
      scale: 1.1,
      height: "100lvh",
      duration: 1,
    });
    gsap.to(".content", {
      scrollTrigger: {
        trigger: "#inicio",
        start: "top top",
        end: "10% top",
        toggleActions: "play none play reverse",
        markers: false,
      },
      opacity: 0,
      transform: "translateY(-40px)",
      ease: "power3.inOut",
      duration: 0.8,
    });
    gsap.to(".svg_container", {
      scrollTrigger: {
        trigger: "#inicio",
        start: "10% top",
        end: "20% top",
        toggleActions: "play none play reverse",
        markers: false,
      },
      opacity: 1,
      transform: "translateY(0px)",
      ease: "power3.inOut",
      duration: 0.8,
    });
  }, []);

  return (
    <div id="inicio">
      <img
        className="image"
        src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732125405/Global%20Solution%202/Start/rnrc2ayfw43653gwkgjd.jpg"
        alt="Fonte de energia limpa - Eólica"
        style={{ height: "80lvh", transform: "scale(1)" }}
      />
      <div
        className="svg_container"
        style={{ opacity: 0, transform: "translateY(40px)" }}
      >
        <Path_1 />
      </div>
      <div className="content">
        <h1 className="text-center" style={{ width: "70%" }}>
          Controle suas contas de energia: Uma solução inteligente para o futuro
        </h1>
        <button>Conhecer</button>
      </div>
      <div className="gradient"></div>
    </div>
  );
};

export default Inicio;
