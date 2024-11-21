"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./Inicio.css";
import Path_1 from "../Paths/Path_1/Path_1";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Inicio = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".pin_container", {
        scrollTrigger: {
          trigger: ".pin_container",
          pin: true,
          start: "1% top",
          end: "100% top",
          scrub: 1.5,
          markers: false,
        },
        opacity: 1,
        duration: 1,
      });
      gsap.to(".image", {
        scrollTrigger: {
          trigger: "#inicio",
          start: "1% top",
          end: "50% top",
          scrub: 1.5,
          markers: false,
        },
        left: "0vh",
        right: "0vh",
        borderRadius: "0px",
        height: "100lvh",
        duration: 1,
      });
      gsap.to(".image2", {
        scrollTrigger: {
          trigger: "#inicio",
          start: "1% top",
          end: "50% top",
          scrub: 1.5,
          markers: false,
        },
        left: "0vh",
        right: "0vh",
        borderRadius: "0px",
        height: "100lvh",
        duration: 1,
      });
      gsap.to(".content", {
        scrollTrigger: {
          trigger: "#inicio",
          start: "10% top",
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
          end: "10% top",
          toggleActions: "play none play reverse",
          markers: false,
        },
        opacity: 1,
        transform: "translateY(0px)",
        ease: "power3.inOut",
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="inicio">
      <div className="pin_container">
        <img
          className="image"
          src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732200384/Global%20Solution%202/Start/u8k6kzellhg9cf1ueer0.jpg"
          alt="Fonte de energia limpa - Eólica"
          style={{ height: "80lvh", transform: "scale(1)" }}
        />
        <img
          className="image2"
          src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732200382/Global%20Solution%202/Start/cylyg1yjsyzaubkcngoy.png"
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
          <h1 className="text-center">
            Controle suas contas de energia: Uma solução inteligente para o
            futuro
          </h1>
          <Link href="/Authentication">Conhecer</Link>
        </div>
        <div className="gradient"></div>
      </div>
    </div>
  );
};

export default Inicio;
