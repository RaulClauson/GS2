"use client";

import "./Edit.css";
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
import { useState, useEffect } from "react";

export function Edit() {
  const [open, setOpen] = useState(false);
  const { monthData, selectedMonth } = useMonthContext();
  const [valor, setValor] = useState("");
  const [consumo, setConsumo] = useState("");

  useEffect(() => {
    if (monthData) {
      setValor(monthData.gasto.toString());
      setConsumo(monthData.consumo.toString());
    }
  }, [monthData, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!monthData?.id) {
      console.error("ID da conta não encontrado");
      return;
    }

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/rest/conta/${monthData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: monthData.id,
            valor: parseFloat(valor),
            consumo: parseFloat(consumo),
            custoKwh: parseFloat(
              (parseFloat(valor) / parseFloat(consumo)).toFixed(2)
            ),
            mes: selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1),
            usuario: userEmail,
          }),
        }
      );

      if (response.ok) {
        setOpen(false);
        window.location.reload();
      } else {
        console.error("Erro ao atualizar conta");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="conta_edit_button" disabled={!monthData}>
          Editar conta
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] add_content">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Editar conta do mês</DialogTitle>
            <DialogDescription>Edite a sua conta desse mês</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="valor" className="text-right">
                R$:
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
