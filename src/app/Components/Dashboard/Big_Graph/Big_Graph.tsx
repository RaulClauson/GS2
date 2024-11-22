"use client";

import "./Big_Graph.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMonth } from "@/context/MonthContext";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const Big_Graph = () => {
  const { monthData, selectedMonth, monthlyData, setSelectedMonth } =
    useMonth();

  const yearlyTotals = Object.values(monthlyData).reduce(
    (acc, data) => ({
      consumo: acc.consumo + (data.consumo || 0),
      gasto: acc.gasto + (data.gasto || 0),
    }),
    { consumo: 0, gasto: 0 }
  );

  const chartData = Object.entries(monthlyData).map(([month, data]) => ({
    name: month.charAt(0).toUpperCase() + month.slice(1),
    gasto: data.gasto,
    consumo: data.consumo,
    isSelected: month === selectedMonth,
    month: month,
  }));

  const handleBarClick = (data: any) => {
    if (data && data.activePayload && data.activePayload[0]) {
      const clickedMonth = data.activePayload[0].payload.month;
      setSelectedMonth(clickedMonth);
    }
  };

  return (
    <Card className="big_graph">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7 big_graph_header">
        <div>
          <CardTitle className="text-base font-normal big_graph_title">
            Visão geral da sua conta
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Mostrando a visão geral da sua conta de energia - 2024
          </p>
        </div>
        <div className="flex">
          <div className="text-right big_grath_box_info">
            <p>Consumo Total</p>
            <p>{yearlyTotals.consumo} KWH</p>
          </div>
          <div className="text-right big_grath_box_info">
            <p>Gastos Totais</p>
            <p>R$ {yearlyTotals.gasto.toLocaleString("pt-BR")}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData}
            onClick={handleBarClick}
            style={{ cursor: "pointer" }}
          >
            <XAxis
              dataKey="name"
              stroke="#EEEBE7"
              opacity={0.5}
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#EEEBE7"
              opacity={0.5}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Consumo (KWH)
                          </span>
                          <span className="font-bold">{payload[0].value}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Gasto (R$)
                          </span>
                          <span className="font-bold">
                            {payload[1]?.value || 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="consumo"
              fill="#EEEBE7"
              radius={[4, 4, 0, 0]}
              opacity={0.5}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#EEEBE7"
                  opacity={entry.isSelected ? 1 : 0.5}
                />
              ))}
            </Bar>
            <Bar
              dataKey="gasto"
              fill="#00E768"
              radius={[4, 4, 0, 0]}
              opacity={0.5}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#00E768"
                  opacity={entry.isSelected ? 1 : 0.5}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Big_Graph;
