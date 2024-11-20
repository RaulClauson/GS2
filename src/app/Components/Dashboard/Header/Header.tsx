"use client";

import {
  Bell,
  LogOut,
  Moon,
  PersonStanding,
  Settings,
  UserRound,
} from "lucide-react";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  // Add useEffect to handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menu && !target.closest(".user") && !target.closest("ul")) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menu]);

  return (
    <>
      <header>
        <nav>
          <a href="" className="logo">
            Logo
          </a>
          <div>
            <button className="bell">
              <Bell size={20} />
            </button>
            <button className="user" onClick={() => setMenu(!menu)}>
              <UserRound size={18} />
            </button>
          </div>
        </nav>
      </header>
      <ul className={menu ? "active" : ""}>
        <li>
          <button>
            <div>
              <h1>Rafael Ronqui</h1>
              <p>rafaelronqui@gmail.com</p>
            </div>
            <Settings size={17} />
          </button>
        </li>
        <li>
          <button>
            <PersonStanding size={20} />
            Acessibilidade
          </button>
          <button>
            <Moon size={20} />
            Dark Mode
          </button>
        </li>
        <li>
          <button className="logout">
            <LogOut size={20} />
            Sair
          </button>
        </li>
      </ul>
    </>
  );
};

export default Header;
