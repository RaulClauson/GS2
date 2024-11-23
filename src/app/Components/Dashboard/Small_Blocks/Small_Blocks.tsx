"use client";

import "./Small_Blocks.css";
import { useMonthContext } from "@/context/MonthContext";

const Small_Blocks = () => {
  const { monthData } = useMonthContext();

  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 small_blocks">
      <StatsCard
        title="Consumo"
        value={`${monthData?.consumo || "0"} KWH`}
        description="Total consumido no mês"
      />
      <StatsCard
        title="Gasto"
        value={`R$ ${monthData?.gasto || "0,00"}`}
        description="Total gasto no mês"
      />
      <StatsCard
        title="Valor do KWH"
        value={`R$ ${monthData?.valorKwh || "0,00"}`}
        description="Valor de 1 kwh com impostos"
      />
    </div>
  );
};

const StatsCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string | number;
  description: string;
}) => {
  return (
    <div className="small_block">
      <p>{title}</p>
      <p>{value}</p>
      <p>{description}</p>
    </div>
  );
};

export default Small_Blocks;
