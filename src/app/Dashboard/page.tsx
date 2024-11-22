"use client";

import Big_Graph from "../Components/Dashboard/Big_Graph/Big_Graph";
import Eletronicos from "../Components/Dashboard/Eletronicos/Eletronicos";
import Header from "../Components/Dashboard/Header/Header";
import Input_conta from "../Components/Dashboard/Input_conta/Input_conta";
import Small_Blocks from "../Components/Dashboard/Small_Blocks/Small_Blocks";
import Title from "../Components/Dashboard/Title/Title";
import Typebot from "../Components/Dashboard/Typebot/Typebot";
import { useEffect } from "react";
import "./Dashboard.css";
import Loading from "../Components/Dashboard/Loading/Loading";
import { MonthProvider } from "@/context/MonthContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("logado") !== "true") {
      router.push("/Authentication");
    }
  }, []);

  return (
    <>
      <Loading />
      <MonthProvider>
        <Header />
        <main>
          <div className="dashboard">
            <Title />
            <Small_Blocks />
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-[68fr_32fr] dashboard_divider">
              <Big_Graph />
              <Eletronicos />
            </div>
          </div>
        </main>
        <Typebot />
      </MonthProvider>
    </>
  );
};

export default Dashboard;
