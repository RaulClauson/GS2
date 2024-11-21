"use client";

import "./Team.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("body", {
        scrollTrigger: {
          trigger: ".team",
          start: "top center",
          end: "200% center",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        backgroundColor: "#eeebe7",
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="team">
      <h1>
        Juntos por um
        <br />
        Futuro Mais <span>Verde</span>
      </h1>
      <div className="team_integrants">
        <div className="team_integrant">
          <img
            src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732195150/Global%20Solution%202/Team/jocx8ws9shauqo3mak6w.png"
            alt="Leonardo José"
          />
          <div className="team_integrant_text">
            <h3>
              Leonardo José
              <p>Dev Back-end</p>
            </h3>
            <div>
              <p>556110 | 1TDSB</p>
              <p>
                <a href="https://github.com/Wanderluzter">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/leojos%C3%A9/">
                  <FaLinkedin />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="team_integrant">
          <img
            src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732195150/Global%20Solution%202/Team/lxiul5bhpkcgtweow961.png"
            alt="Raul Clauson"
          />
          <div className="team_integrant_text">
            <h3>
              Raul Clauson
              <p>Dev Front-end</p>
            </h3>
            <div>
              <p>555006 | 1TDSB</p>
              <p>
                <a href="https://github.com/RaulClauson">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/raul-clauson/">
                  <FaLinkedin />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="team_integrant">
          <img
            src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732195150/Global%20Solution%202/Team/wdsyj39riy9fn2wpwrmv.png"
            alt="Mirian Bronzati"
          />
          <div className="team_integrant_text">
            <h3>
              Mirian Bronzati
              <p>Dev AI</p>
            </h3>
            <div>
              <p>555041 | 1TDSB</p>
              <p>
                <a href="https://github.com/nakedmimi">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mirian-b-058348239/">
                  <FaLinkedin />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;