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

  //sessionStorage clean
  sessionStorage.clear();

  const [isLogin, setIsLogin] = useState(true);
  return (
    <section id="authentication">
      <div>
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Cadastro setIsLogin={setIsLogin} />
        )}
      </div>
      <div className="image">
        <img
          src="https://res.cloudinary.com/dr0nki74e/image/upload/v1731705806/Global%20Solution%202/Authentication/ygsa04pc7d1y059xlfnd.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Authentication;
