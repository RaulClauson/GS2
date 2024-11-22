"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = ({ setIsLogin }: { setIsLogin: (value: boolean) => void }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/rest/usuario");
      const users = await response.json();

      const user = users.find(
        (user: any) => user.emailUs === email && user.senha === password
      );

      if (user) {
        localStorage.setItem("userName", user.nome);
        localStorage.setItem("userEmail", user.emailUs);
        localStorage.setItem("logado", "true");

        router.push("/Dashboard");
      } else {
        alert("Email ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h1>Olá, Boas-vindas!</h1>
        <a onClick={() => setIsLogin(false)}>
          Ainda não tem uma conta? <span>Cadastrar</span>
        </a>
      </fieldset>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>
        <span>Esqueceu sua senha?</span>
      </p>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
