"use client";

import "./Slide.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Slide = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".slide-content", {
        scrollTrigger: {
          trigger: ".slide-content",
          pin: true,
          start: "top top",
          end: "100% top",
          scrub: 1.5,
          markers: false,
        },
        opacity: 1,
        duration: 1,
      });
      gsap.to(".slide_txt1", {
        scrollTrigger: {
          trigger: ".slide",
          start: "-50% top",
          end: "10% top",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
      gsap.to(".slide_txt2", {
        scrollTrigger: {
          trigger: ".slide",
          start: "10% top",
          end: "33% top",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
      gsap.to(".slide_txt3", {
        scrollTrigger: {
          trigger: ".slide",
          start: "33% top",
          end: "100% top",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
      gsap.to(".slide_img1", {
        scrollTrigger: {
          trigger: ".slide",
          start: "-50% top",
          end: "10% top",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        opacity: 1,
        height: "100%",
        ease: "power2.inOut",
        duration: 1,
      });
      gsap.to(".slide_img2", {
        scrollTrigger: {
          trigger: ".slide",
          start: "10% top",
          end: "33% top",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        opacity: 1,
        height: "100%",
        ease: "power2.inOut",
        duration: 1,
      });
      gsap.to(".slide_img3", {
        scrollTrigger: {
          trigger: ".slide",
          start: "33% top",
          end: "100% top",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        opacity: 1,
        height: "100%",
        ease: "power2.inOut",
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="slide-content-text">
          <h1 className="slide_txt1">
            <span>Reduza seus custos</span>
            <br />
            Monitoramento
            <br />
            Detalhado
          </h1>
          <h1 className="slide_txt2">
            <span>Reduza seus custos</span>
            <br />
            Dicas Personalizadas
            <br />
            para Você
          </h1>
          <h1 className="slide_txt3">
            <span>Reduza seus custos</span>
            <br />
            Comparação de
            <br />
            Gastos
          </h1>
          <p className="slide_txt1">
            Monitorar seu consumo de energia pode parecer uma tarefa complicada,
            mas nossa solução torna esse processo simples e acessível. Com
            gráficos e análises detalhadas do seu uso mensal, você terá uma
            visão clara do seu padrão de consumo.
          </p>
          <p className="slide_txt2">
            Receba dicas práticas e fáceis de implementar para reduzir o
            desperdício. Nossa [IA] analisará seu perfil de consumo e fornecerá
            recomendações personalizadas, levando em consideração suas
            necessidades e hábitos específicos.
          </p>
          <p className="slide_txt3">
            Compare seu consumo com meses anteriores e identifique picos de uso.
            Nossa plataforma oferece uma visão detalhada do seu histórico de
            consumo, permitindo que você acompanhe tendências e identifique
            oportunidades de economia.
          </p>
        </div>
        <div className="slide-content-img">
          <img
            src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732150849/Global%20Solution%202/Slide/jslzpfjethgzcbtjxhcx.png"
            alt=""
            className="slide_img1"
            style={{ height: "0%" }}
          />
          <img
            src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732150849/Global%20Solution%202/Slide/jslzpfjethgzcbtjxhcx.png"
            alt=""
            className="slide_img2"
            style={{ height: "0%" }}
          />
          <img
            src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732150849/Global%20Solution%202/Slide/jslzpfjethgzcbtjxhcx.png"
            alt=""
            className="slide_img3"
            style={{ height: "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
