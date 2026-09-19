"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Step1Location() {
  const router = useRouter();
  const setApplicationId = useApplicationStore((state) => state.setApplicationId);
  const [isLoading, setIsLoading] = useState(false);
  
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ zipCode, state }),
      });

      const data = await response.json();
      
      if (data.success && data.application?.id) {
        setApplicationId(data.application.id);
        router.push("/apply/step-2");
      } else {
        alert("Error creating application draft");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Comencemos con tu ubicación
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Esto nos ayuda a mostrarte las opciones correctas para tu estado.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-2">
          <Label htmlFor="zipCode" className="text-base">Código Postal *</Label>
          <Input 
            id="zipCode" 
            placeholder="ej. 90001" 
            required 
            pattern="[0-9]{5}"
            className="h-12 text-lg"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state" className="text-base">Estado *</Label>
          <select 
            id="state" 
            required 
            className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Selecciona un estado</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
            <option value="NY">New York</option>
            <option value="IL">Illinois</option>
            <option value="OTHER">Otro</option>
          </select>
        </div>

        <Button type="submit" size="lg" className="w-full h-14 text-lg mt-8 rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Continuar"}
        </Button>
      </form>
    </div>
  );
}
