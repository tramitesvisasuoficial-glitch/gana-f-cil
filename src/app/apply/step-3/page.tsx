"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Step3Housing() {
  const router = useRouter();
  const applicationId = useApplicationStore((state) => state.applicationId);
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    housingStatus: "",
    housingCost: "",
  });

  useEffect(() => {
    if (!applicationId) {
      router.push("/apply/step-1");
    }
  }, [applicationId, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationId) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: formData.address,
          housingStatus: formData.housingStatus,
          housingCost: formData.housingCost ? parseFloat(formData.housingCost) : 0,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        router.push("/apply/step-4");
      } else {
        alert("Error actualizando la aplicación");
      }
    } catch (error) {
      console.error(error);
      alert("Algo salió mal");
    } finally {
      setIsLoading(false);
    }
  };

  if (!applicationId) return null;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Detalles de tu vivienda
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Esto nos ayuda a entender tus gastos mensuales.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address" className="text-base">Dirección *</Label>
            <Input id="address" required className="h-12 text-lg" placeholder="123 Main St, Apt 4B" value={formData.address} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="housingStatus" className="text-base">Situación de vivienda *</Label>
            <select 
              id="housingStatus" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.housingStatus} 
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="rent">Alquiler</option>
              <option value="own">Propia</option>
              <option value="family">Vivo con familiares</option>
              <option value="other">Otra</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="housingCost" className="text-base">Gasto mensual de vivienda *</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input id="housingCost" type="number" required min="0" className="h-12 text-lg pl-8" placeholder="0" value={formData.housingCost} onChange={handleChange} />
            </div>
            <p className="text-xs text-muted-foreground">Tu parte de la renta o hipoteca.</p>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full h-14 text-lg mt-8 rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Continuar"}
        </Button>
      </form>
    </div>
  );
}
