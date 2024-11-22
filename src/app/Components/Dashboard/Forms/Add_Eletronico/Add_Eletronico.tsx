"use client";

import "./Add_Eletronico.css";
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

export function Add_Eletronico() {
  const [open, setOpen] = useState(false);
  const [valor, setValor] = useState("");
  const [consumo, setConsumo] = useState("");
  const { selectedMonth, monthlyData } = useMonthContext();

  // Função para gerar ID aleatório de 4 dígitos
  const generateId = () => {
    const min = 1000; // Menor número de 4 dígitos
    const max = 9999; // Maior número de 4 dígitos
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    // Gera um ID de 4 dígitos
    const newId = generateId();

    try {
      const response = await fetch("http://localhost:8080/api/rest/conta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: newId,
          valor: parseFloat(valor),
          consumo: parseFloat(consumo),
          custoKwh: parseFloat(
            (parseFloat(valor) / parseFloat(consumo)).toFixed(2)
          ),
          mes: selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1),
          usuario: userEmail,
        }),
      });

      if (response.ok) {
        setValor("");
        setConsumo("");
        setOpen(false);
        window.location.reload();
      } else {
        console.error("Erro ao adicionar conta");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="eletronicos_add_button">+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] add_content">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar eletrônico</DialogTitle>
            <DialogDescription>
              Adicione o eletrônico que você consumiu nesse mês
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="valor" className="text-right">
                Nome:
              </Label>
              <Input
                id="valor"
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="col-span-3 add_input"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="valor" className="text-right">
                Marca:
              </Label>
              <Input
                id="valor"
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="col-span-3 add_input"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="consumo" className="text-right">
                KWH:
              </Label>
              <Input
                id="consumo"
                type="number"
                value={consumo}
                onChange={(e) => setConsumo(e.target.value)}
                className="col-span-3 add_input"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="conta_button">
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
