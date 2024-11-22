"use client";

import React, { createContext, useContext, useState } from "react";

type ElectronicData = {
  eletronico: string;
  marca: string;
  consumo: number;
};

type MonthContextType = {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  monthData: {
    gasto: number;
    consumo: number;
    valorKwh: number;
    eletronicos: ElectronicData[];
  } | null;
  monthlyData: {
    [key: string]: {
      gasto: number;
      consumo: number;
      valorKwh: number;
      eletronicos: ElectronicData[];
    };
  };
};

const MonthContext = createContext<MonthContextType | undefined>(undefined);

export function MonthProvider({ children }: { children: React.ReactNode }) {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return new Date().toLocaleString("pt-BR", { month: "long" }).toLowerCase();
  });

  // Updated mock data with electronics
  const monthlyData = {
    janeiro: {
      gasto: 150,
      consumo: 250,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Ar Condicionado", marca: "Samsung", consumo: 380 },
        { eletronico: "Chuveiro", marca: "Lorenzetti", consumo: 85 },
        { eletronico: "Ventilador", marca: "Arno", consumo: 65 },
        { eletronico: "Geladeira", marca: "Brastemp", consumo: 30 },
        { eletronico: "TV", marca: "LG", consumo: 15 },
      ],
    },
    fevereiro: {
      gasto: 140,
      consumo: 230,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Ar Condicionado", marca: "Samsung", consumo: 350 },
        { eletronico: "Máquina de Lavar", marca: "Electrolux", consumo: 88 },
        { eletronico: "Ventilador", marca: "Mondial", consumo: 55 },
        { eletronico: "Geladeira", marca: "Consul", consumo: 32 },
        { eletronico: "Computador", marca: "Dell", consumo: 20 },
      ],
    },
    março: {
      gasto: 130,
      consumo: 210,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Ar Condicionado", marca: "LG", consumo: 290 },
        { eletronico: "Ferro de Passar", marca: "Philips", consumo: 75 },
        { eletronico: "Geladeira", marca: "Samsung", consumo: 35 },
        { eletronico: "Microondas", marca: "Electrolux", consumo: 25 },
        { eletronico: "Notebook", marca: "Lenovo", consumo: 18 },
      ],
    },
    abril: {
      gasto: 120,
      consumo: 200,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Chuveiro", marca: "Lorenzetti", consumo: 80 },
        { eletronico: "Secadora", marca: "Brastemp", consumo: 63 },
        { eletronico: "Geladeira", marca: "LG", consumo: 33 },
        { eletronico: "Aspirador", marca: "Philco", consumo: 22 },
        { eletronico: "Monitor", marca: "Samsung", consumo: 12 },
      ],
    },
    maio: {
      gasto: 110,
      consumo: 180,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Aquecedor", marca: "Mondial", consumo: 95 },
        { eletronico: "Chuveiro", marca: "Corona", consumo: 70 },
        { eletronico: "Geladeira", marca: "Electrolux", consumo: 31 },
        { eletronico: "Cafeteira", marca: "Arno", consumo: 20 },
        { eletronico: "Roteador", marca: "TP-Link", consumo: 8 },
      ],
    },
    junho: {
      gasto: 100,
      consumo: 160,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Aquecedor", marca: "Britânia", consumo: 110 },
        { eletronico: "Chuveiro", marca: "Lorenzetti", consumo: 75 },
        { eletronico: "Geladeira", marca: "Consul", consumo: 34 },
        { eletronico: "Forno Elétrico", marca: "Philco", consumo: 28 },
        { eletronico: "Impressora", marca: "HP", consumo: 12 },
      ],
    },
    julho: {
      gasto: 90,
      consumo: 140,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Aquecedor", marca: "Philips", consumo: 120 },
        { eletronico: "Chuveiro", marca: "Fame", consumo: 82 },
        { eletronico: "Geladeira", marca: "Samsung", consumo: 35 },
        { eletronico: "Xbox", marca: "Microsoft", consumo: 25 },
        { eletronico: "Som", marca: "Sony", consumo: 15 },
      ],
    },
    agosto: {
      gasto: 80,
      consumo: 120,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Aquecedor", marca: "Consul", consumo: 105 },
        { eletronico: "Secador de Cabelo", marca: "Taiff", consumo: 45 },
        { eletronico: "Geladeira", marca: "LG", consumo: 32 },
        { eletronico: "PlayStation", marca: "Sony", consumo: 23 },
        { eletronico: "Alexa", marca: "Amazon", consumo: 5 },
      ],
    },
    setembro: {
      gasto: 70,
      consumo: 100,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Ventilador", marca: "Arno", consumo: 45 },
        { eletronico: "Chuveiro", marca: "Lorenzetti", consumo: 65 },
        { eletronico: "Geladeira", marca: "Brastemp", consumo: 33 },
        { eletronico: "Liquidificador", marca: "Philips", consumo: 15 },
        { eletronico: "Carregador", marca: "Apple", consumo: 8 },
      ],
    },
    outubro: {
      gasto: 60,
      consumo: 80,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Ar Condicionado", marca: "Consul", consumo: 250 },
        { eletronico: "Chuveiro", marca: "Fame", consumo: 60 },
        { eletronico: "Geladeira", marca: "Samsung", consumo: 34 },
        { eletronico: "Batedeira", marca: "Mondial", consumo: 18 },
        { eletronico: "Tablet", marca: "Samsung", consumo: 10 },
      ],
    },
    novembro: {
      gasto: 50,
      consumo: 60,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Ar Condicionado", marca: "LG", consumo: 320 },
        { eletronico: "Ventilador", marca: "Mondial", consumo: 58 },
        { eletronico: "Geladeira", marca: "Electrolux", consumo: 35 },
        { eletronico: "Smart TV", marca: "Samsung", consumo: 22 },
        { eletronico: "Videogame", marca: "Nintendo", consumo: 12 },
      ],
    },
    dezembro: {
      gasto: 40,
      consumo: 40,
      valorKwh: 0.5,
      eletronicos: [
        { eletronico: "Ar Condicionado", marca: "Samsung", consumo: 400 },
        { eletronico: "Ventilador", marca: "Philco", consumo: 70 },
        { eletronico: "Geladeira", marca: "LG", consumo: 36 },
        { eletronico: "Luzes de Natal", marca: "Diversos", consumo: 45 },
        { eletronico: "Som", marca: "JBL", consumo: 25 },
      ],
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
