"use client";

import { Add } from "../Forms/Add/Add";
import { Edit } from "../Forms/Edit/Edit";
import { useEffect, useState } from "react";
import "./Title.css";
import { ComboboxDemo } from "@/components/ui/ComboBox";
import { useMonthContext } from "@/context/MonthContext";

const Title = () => {
  const [userName, setUserName] = useState("User");
  const { monthData } = useMonthContext();

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
        {monthData ? <Edit /> : <Add />}
      </div>
    </div>
  );
};

export default Title;
