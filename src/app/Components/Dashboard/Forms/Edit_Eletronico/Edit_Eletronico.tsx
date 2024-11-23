"use client";

import "./Edit_Eletronico.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMonthContext } from "@/context/MonthContext";
import { useState } from "react";

interface EditEletronicoProps {
  device: {
    id: number;
    eletronico: string;
    marca: string;
    consumo: number;
    ano: number;
    status: string;
  };
  onClose: () => void;
}

export function Edit_Eletronico({ device, onClose }: EditEletronicoProps) {
  const [nome, setNome] = useState(device?.eletronico || "");
  const [marca, setMarca] = useState(device?.marca || "");
  const [consumo, setConsumo] = useState(device?.consumo?.toString() || "0");
  const [ano, setAno] = useState(device?.ano?.toString() || "");
  const { selectedMonth } = useMonthContext();

  if (!device) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/rest/equipamento/${device.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: device.id,
            nome: nome,
            marca: marca,
            ano: parseInt(ano),
            consumo: parseFloat(consumo),
            status: device.status,
            usuario: userEmail,
          }),
        }
      );

      if (response.ok) {
        onClose();
        window.location.reload();
      } else {
        console.error("Erro ao atualizar equipamento");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] add_content">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Editar eletrônico</DialogTitle>
            <DialogDescription>
              Edite o eletrônico que você consumiu nesse mês
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nome" className="text-right">
                Nome:
              </Label>
              <Input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="col-span-3 add_input"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="marca" className="text-right">
                Marca:
              </Label>
              <Input
                id="marca"
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                className="col-span-3 add_input"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ano" className="text-right">
                Ano:
              </Label>
              <Input
                id="ano"
                type="number"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                className="col-span-3 add_input"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="conta_button">
              Atualizar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
