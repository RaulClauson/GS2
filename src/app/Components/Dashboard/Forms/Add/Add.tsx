"use client";

import "./Add.css";
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

export function Add() {
  const [open, setOpen] = useState(false);
  const [valor, setValor] = useState("");
  const [consumo, setConsumo] = useState("");
  const { selectedMonth, monthlyData } = useMonthContext();

  // Função para encontrar o próximo ID disponível
  const findNextAvailableId = async (userEmail: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/rest/conta/usuario/${userEmail}`
      );
      if (!response.ok) return 1000; // Começa com 1000 se não houver dados

      const contas = await response.json();
      if (!contas.length) return 1000;

      // Ordena os IDs existentes
      const existingIds = contas
        .map((conta: any) => conta.id)
        .sort((a: number, b: number) => a - b);

      // Encontra o primeiro ID disponível
      let nextId = 1000;
      while (nextId <= 9999) {
        if (!existingIds.includes(nextId)) {
          return nextId;
        }
        nextId++;
      }
      throw new Error("Não há IDs disponíveis");
    } catch (error) {
      console.error("Erro ao buscar IDs:", error);
      return 1000;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    let newId = await findNextAvailableId(userEmail);

    const attemptSave = async (id: number) => {
      try {
        const response = await fetch("http://localhost:8080/api/rest/conta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
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
          return true; // Salvo com sucesso
        } else {
          console.error(
            `Erro ao adicionar conta com ID ${id}. Tentando outro...`
          );
          return false; // Falha no salvamento
        }
      } catch (error) {
        console.error(`Erro ao enviar dados com ID ${id}:`, error);
        return false;
      }
    };

    // Tentativa de salvar com diferentes IDs, limitado a 10 tentativas
    let attempts = 0;
    const maxAttempts = 10; // Número máximo de tentativas

    while (newId <= 9999 && attempts < maxAttempts) {
      const success = await attemptSave(newId);
      if (success) return; // Sai do loop se salvar com sucesso
      newId++; // Incrementa para o próximo ID
      attempts++; // Incrementa o contador de tentativas
    }

    console.error("Não foi possível adicionar a conta. IDs esgotados.");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="conta_add_button">Adicionar conta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] add_content">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Adicionar conta do mês</DialogTitle>
            <DialogDescription>
              Adicione a sua conta desse mês
            </DialogDescription>
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
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
