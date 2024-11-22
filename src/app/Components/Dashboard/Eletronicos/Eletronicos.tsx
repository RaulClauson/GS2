"use client";

import "./Eletronicos.css";
import { Add_Eletronico } from "../Forms/Add_Eletronico/Add_Eletronico";
import { Edit_Eletronico } from "../Forms/Edit_Eletronico/Edit_Eletronico";
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
import { useRouter } from "next/navigation";
import { useState } from "react";

type ElectronicData = {
  id: number;
  eletronico: string;
  marca: string;
  consumo: number;
  ano: number;
  status: string;
};

const Eletronicos = () => {
  const { monthData } = useMonthContext();
  const eletronicos = monthData?.eletronicos || [];
  const [selectedDevice, setSelectedDevice] = useState<ElectronicData | null>(
    null
  );
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `http://localhost:8080/api/rest/equipamento/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        router.refresh();
      } else {
        console.error("Erro ao deletar eletrônico");
      }
    } catch (error) {
      console.error("Erro ao deletar eletrônico:", error);
    }
  };

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
        <div className="max-h-[400px] overflow-y-auto pr-2 eletronicos_card_content">
          <div className="space-y-8">
            {eletronicos.map((device) => (
              <div
                key={device.id}
                className="flex items-center cursor-pointer"
                onClick={() => setSelectedDevice(device)}
              >
                <div className="relative group">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`https://source.unsplash.com/random/100x100/?${device.eletronico}`}
                    />
                    <AvatarFallback>{device.eletronico[0]}</AvatarFallback>
                  </Avatar>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={(e) => handleDelete(e, device.id)}
                  >
                    <X className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-white">
                    {device.eletronico}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {device.marca}
                  </p>
                </div>
                <div className="ml-auto font-medium consumo_ele">
                  {device.consumo}KWH
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      {selectedDevice && (
        <Edit_Eletronico
          device={selectedDevice}
          onClose={() => setSelectedDevice(null)}
        />
      )}
    </Card>
  );
};

export default Eletronicos;
