"use client";

import Cadastro from "../Components/Authentication/Cadastro/Cadastro";
import Login from "../Components/Authentication/Login/Login";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./Authentication.css";

const Authentication = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("logado") === "true") {
      router.push("/Dashboard");
    }
  }, []);

  useEffect(() => {
    // Ensure sessionStorage is cleared only on the client side
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
  }, []);

  const [isLogin, setIsLogin] = useState(true);
  return (
    <section id="authentication">
      <div>
        <a href="/" className="logo">
          <img src="img/Logo.png" alt="" />
        </a>
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Cadastro setIsLogin={setIsLogin} />
        )}
      </div>
      <div className="image">
        <img src="img/Authentication.png" alt="" />
      </div>
    </section>
  );
};

export default Authentication;
