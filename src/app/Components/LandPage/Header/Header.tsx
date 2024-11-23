"use client";

import { useState, useEffect } from "react";
import "./Header.css";
import Link from "next/link";

const Header = () => {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;

      if (currentScrollY > lastScrollY && currentScrollY < maxScrollY) {
        setHide(true);
      } else {
        setHide(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={hide ? "hide" : ""}>
      <nav>
        <div className="logo">
          <a href=""></a>
        </div>
        <div className="entrar">
          <Link href="/Authentication">Entrar</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
