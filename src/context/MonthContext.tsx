"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ElectronicData = {
  id: number;
  eletronico: string;
  marca: string;
  consumo: number;
  ano: number;
  status: string;
};

type MonthData = {
  id: number;
  gasto: number;
  consumo: number;
  valorKwh: number;
  eletronicos: ElectronicData[];
};

type MonthContextType = {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  monthData: MonthData | null;
  monthlyData: { [key: string]: MonthData };
};

const MonthContext = createContext<MonthContextType | undefined>(undefined);

export function MonthProvider({ children }: { children: React.ReactNode }) {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return new Date().toLocaleString("pt-BR", { month: "long" }).toLowerCase();
  });

  const [monthlyData, setMonthlyData] = useState<{ [key: string]: MonthData }>(
    {}
  );
  const [monthData, setMonthData] = useState<MonthData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userEmail = localStorage.getItem("userEmail");
      if (!userEmail) return;

      try {
        // Busca os dados das APIs
        const [contasRes, equipamentosRes] = await Promise.all([
          fetch("http://localhost:8080/api/rest/conta"),
          fetch("http://localhost:8080/api/rest/equipamento"),
        ]);

        const contas = await contasRes.json();
        const equipamentos = await equipamentosRes.json();

        // Filtra os dados pelo usuário logado
        const contasUsuario = contas.filter(
          (conta: any) => conta.usuario === userEmail
        );
        const equipamentosUsuario = equipamentos.filter(
          (equipamento: any) => equipamento.usuario === userEmail
        );

        // Organiza os dados por mês
        const dataByMonth: { [key: string]: MonthData } = {};
        contasUsuario.forEach((conta: any) => {
          const mes = conta.mes.toLowerCase();
          if (!dataByMonth[mes]) {
            dataByMonth[mes] = {
              id: conta.id,
              gasto: 0,
              consumo: 0,
              valorKwh: 0,
              eletronicos: [],
            };
          }
          dataByMonth[mes].id = conta.id;
          dataByMonth[mes].gasto = conta.valor;
          dataByMonth[mes].consumo = conta.consumo;
          dataByMonth[mes].valorKwh = conta.custoKwh;
        });

        // Associa os eletrônicos ao mês atual
        equipamentosUsuario.forEach((equipamento: any) => {
          const eletronicData: ElectronicData = {
            id: equipamento.id,
            eletronico: equipamento.nome,
            marca: equipamento.marca,
            consumo: equipamento.consumo,
            ano: equipamento.ano,
            status: equipamento.status,
          };

          // Adiciona os eletrônicos ao mês selecionado
          const mesAtual = selectedMonth;
          if (dataByMonth[mesAtual]) {
            dataByMonth[mesAtual].eletronicos.push(eletronicData);
          }
        });

        setMonthlyData(dataByMonth);
        setMonthData(dataByMonth[selectedMonth] || null);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, [selectedMonth]);

  return (
    <MonthContext.Provider
      value={{
        selectedMonth,
        setSelectedMonth,
        monthData,
        monthlyData,
      }}
    >
      {children}
    </MonthContext.Provider>
  );
}

export function useMonthContext() {
  const context = useContext(MonthContext);
  if (!context) {
    throw new Error(
      "useMonthContext deve ser usado dentro de um MonthProvider"
    );
  }
  return context;
}
