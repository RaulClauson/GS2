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
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [consumo, setConsumo] = useState("0");
  const [ano, setAno] = useState("");
  const { selectedMonth } = useMonthContext();

  // Função para gerar ID aleatório de 3 dígitos
  const generateId = () => {
    const min = 100;
    const max = 999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) return;

    const newId = generateId();

    try {
      const response = await fetch(
        "http://localhost:8080/api/rest/equipamento",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: newId,
            nome: nome,
            marca: marca,
            ano: parseInt(ano),
            consumo: parseFloat(consumo),
            status: "ON",
            usuario: userEmail,
          }),
        }
      );

      if (response.ok) {
        setNome("");
        setMarca("");
        setConsumo("");
        setAno("");
        setOpen(false);
        window.location.reload();
      } else {
        console.error("Erro ao adicionar equipamento");
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
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
