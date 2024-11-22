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
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserName) setUserName(storedUserName);
    if (storedUserEmail) setUserEmail(storedUserEmail);
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("logado");
    router.push("/Authentication");
  };

  return (
    <>
      <header>
        <nav>
          <a href="" className="logo">
            <img
              src="https://res.cloudinary.com/dr0nki74e/image/upload/v1732225851/Global%20Solution%202/Logo/hqmwveovjkttgedyruyr.png"
              alt=""
            />
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
              <h1>{userName}</h1>
              <p>{userEmail}</p>
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
          <button className="logout" onClick={handleLogout}>
            <LogOut size={20} />
            Sair
          </button>
        </li>
      </ul>
    </>
  );
};

export default Header;
