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

export function Add() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="conta_button">Adicionar conta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] add_content">
        <DialogHeader>
          <DialogTitle>Conta do mês</DialogTitle>
          <DialogDescription>Adicione a sua conta desse mês</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="valor" className="text-right">
              R$:
            </Label>
            <Input
              id="valor"
              defaultValue="200"
              className="col-span-3 add_input"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="consumo" className="text-right">
              KWH:
            </Label>
            <Input
              id="consumo"
              defaultValue="300"
              className="col-span-3 add_input"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="conta_button">
            Adicionar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
