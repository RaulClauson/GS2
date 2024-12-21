"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./Inicio.css";
import Path_1 from "../Paths/Path_1/Path_1";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      gsap.to(".logo_carousel", {
        scrollTrigger: {
          trigger: "#inicio",
          start: "1% top",
          end: "10% top",
          scrub: 1.5,
          markers: false,
        },
        opacity: 0,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Added to remove arrows
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
        <div className="logo_carousel">
          <Slider {...logoSettings}>
            <div>
              <img
                src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732280424/Global%20Solution%202/Brands/akbhleafknfuz8g1ktia.png"
                alt="Logo 1"
                style={{ width: "auto" }}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732280424/Global%20Solution%202/Brands/c3pa255a2bnfnjogknsw.png"
                alt="Logo 2"
                style={{ width: "auto" }}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732280424/Global%20Solution%202/Brands/bg3jwzidgmqjusmyzwau.png"
                alt="Logo 3"
                style={{ width: "auto" }}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732280424/Global%20Solution%202/Brands/so3ny3osfqqftxea6p0u.png"
                alt="Logo 4"
                style={{ width: "auto" }}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732280424/Global%20Solution%202/Brands/p3ryrou3ndclaind1qow.png"
                alt="Logo 5"
                style={{ width: "auto" }}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732280424/Global%20Solution%202/Brands/nmklhrzll7tsmhdz4r9u.png"
                alt="Logo 6"
                style={{ width: "auto" }}
              />
            </div>
            {/* Adicione mais logos conforme necessário */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
