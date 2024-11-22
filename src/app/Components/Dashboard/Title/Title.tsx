"use client";

import { Add } from "../Forms/Add/Add";
import { useEffect, useState } from "react";
import "./Title.css";
import { ComboboxDemo } from "@/components/ui/ComboBox";

const Title = () => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="title">
      <div>
        <p>Dashboard</p>
        <h1>
          Olá, <span>{userName}</span>
        </h1>
      </div>
      <div className="date">
        <ComboboxDemo />
        <Add />
      </div>
    </div>
  );
};

export default Title;
