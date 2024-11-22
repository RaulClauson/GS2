"use client";

import React, { createContext, useContext, useState } from "react";

type MonthContextType = {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  monthData: {
    gasto: number;
    consumo: number;
    valorKwh: number;
  } | null;
  monthlyData: {
    [key: string]: {
      gasto: number;
      consumo: number;
      valorKwh: number;
    };
  };
};

const MonthContext = createContext<MonthContextType | undefined>(undefined);

export function MonthProvider({ children }: { children: React.ReactNode }) {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return new Date().toLocaleString("pt-BR", { month: "long" }).toLowerCase();
  });

  // Mock data - replace with real API calls later
  const monthlyData = {
    janeiro: {
      gasto: 150,
      consumo: 250,
      valorKwh: 0.5,
    },
    fevereiro: {
      gasto: 140,
      consumo: 230,
      valorKwh: 0.5,
    },
    março: {
      gasto: 130,
      consumo: 210,
      valorKwh: 0.5,
    },
    abril: {
      gasto: 120,
      consumo: 200,
      valorKwh: 0.5,
    },
    maio: {
      gasto: 110,
      consumo: 180,
      valorKwh: 0.5,
    },
    junho: {
      gasto: 100,
      consumo: 160,
      valorKwh: 0.5,
    },
    julho: {
      gasto: 90,
      consumo: 140,
      valorKwh: 0.5,
    },
    agosto: {
      gasto: 80,
      consumo: 120,
      valorKwh: 0.5,
    },
    setembro: {
      gasto: 70,
      consumo: 100,
      valorKwh: 0.5,
    },
    outubro: {
      gasto: 60,
      consumo: 80,
      valorKwh: 0.5,
    },
    novembro: {
      gasto: 50,
      consumo: 60,
      valorKwh: 0.5,
    },
    dezembro: {
      gasto: 40,
      consumo: 40,
      valorKwh: 0.5,
    },
    // Add data for other months...
  };

  const monthData =
    monthlyData[selectedMonth as keyof typeof monthlyData] || null;

  return (
    <MonthContext.Provider
      value={{ selectedMonth, setSelectedMonth, monthData, monthlyData }}
    >
      {children}
    </MonthContext.Provider>
  );
}

export function useMonth() {
  const context = useContext(MonthContext);
  if (context === undefined) {
    throw new Error("useMonth must be used within a MonthProvider");
  }
  return context;
}
