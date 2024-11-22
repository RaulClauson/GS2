"use client";

import "./Eletronicos.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMonthContext } from "@/context/MonthContext";

const Eletronicos = () => {
  const { monthData } = useMonthContext();
  const eletronicos = monthData?.eletronicos || [];

  return (
    <Card className="eletronicos_card">
      <CardHeader>
        <CardTitle>Eletrônicos</CardTitle>
        <CardDescription>
          {eletronicos.length} eletrônicos consumiram nesse mês
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {eletronicos.map((device) => (
            <div key={device.eletronico} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={`https://source.unsplash.com/random/100x100/?${device.eletronico}`}
                />
                <AvatarFallback>{device.eletronico[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {device.eletronico}
                </p>
                <p className="text-sm text-muted-foreground">{device.marca}</p>
              </div>
              <div className="ml-auto font-medium">{device.consumo}KWH</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Eletronicos;
