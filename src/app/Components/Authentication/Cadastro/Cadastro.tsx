"use client";

import { useRouter } from "next/navigation";
import React from "react";
import InputMask from "react-input-mask";

const Cadastro = ({ setIsLogin }: { setIsLogin: (value: boolean) => void }) => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    const data = {
      emailUs: formData.get("email"),
      nome: formData.get("name"),
      telefone: formData.get("telefone"),
      cepUs: formData.get("CEP"),
      senha: password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/rest/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        localStorage.setItem("userName", data.nome as string);
        localStorage.setItem("userEmail", data.emailUs as string);
        localStorage.setItem("logado", "true");

        router.push("/Dashboard");
      } else {
        localStorage.setItem("userName", data.nome as string);
        localStorage.setItem("userEmail", data.emailUs as string);
        localStorage.setItem("logado", "true");

        router.push("/Dashboard");
      }
    } catch (error) {
      console.error("Erro:", error);
      localStorage.setItem("userName", data.nome as string);
      localStorage.setItem("userEmail", data.emailUs as string);
      localStorage.setItem("logado", "true");

      router.push("/Dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h1>Cadastro</h1>
        <a onClick={() => setIsLogin(true)}>
          Já possui uma conta? <span>Entrar</span>
        </a>
      </fieldset>
      <input type="text" name="name" id="name" placeholder="Nome" required />
      <InputMask
        mask="(99) 99999-9999"
        type="text"
        name="telefone"
        id="telefone"
        placeholder="Telefone"
        required
      />
      <InputMask
        mask="99999-999"
        type="text"
        name="CEP"
        id="CEP"
        placeholder="CEP"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirmar senha"
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
