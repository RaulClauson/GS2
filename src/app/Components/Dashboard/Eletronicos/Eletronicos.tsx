"use client";

import "./Eletronicos.css";
import { Add_Eletronico } from "../Forms/Add_Eletronico/Add_Eletronico";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMonthContext } from "@/context/MonthContext";
import { X } from "lucide-react";

const Eletronicos = () => {
  const { monthData } = useMonthContext();
  const eletronicos = monthData?.eletronicos || [];

  return (
    <Card className="eletronicos_card">
      <CardHeader className="flex justify-between items-center flex-row">
        <div>
          <CardTitle>Eletrônicos</CardTitle>
          <CardDescription>
            {eletronicos.length} eletrônicos consumiram nesse mês
          </CardDescription>
        </div>
        <Add_Eletronico />
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {eletronicos.map((device) => (
            <div key={device.eletronico} className="flex items-center">
              <div className="relative group">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={`https://source.unsplash.com/random/100x100/?${device.eletronico}`}
                  />
                  <AvatarFallback>{device.eletronico[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center bg-black/100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <X className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none text-white">
                  {device.eletronico}
                </p>
                <p className="text-sm text-muted-foreground">{device.marca}</p>
              </div>
              <div className="ml-auto font-medium consumo_ele">
                {device.consumo}KWH
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Eletronicos;
