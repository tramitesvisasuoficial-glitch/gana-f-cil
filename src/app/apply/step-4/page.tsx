"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Step4Employment() {
  const router = useRouter();
  const applicationId = useApplicationStore((state) => state.applicationId);
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    employmentStatus: "",
    employer: "",
    monthlyIncome: "",
    incomeFrequency: "",
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
          employmentStatus: formData.employmentStatus,
          employer: formData.employer,
          monthlyIncome: formData.monthlyIncome ? parseFloat(formData.monthlyIncome.replace(/,/g, '')) : 0,
          incomeFrequency: formData.incomeFrequency,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        router.push("/apply/step-5");
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
          Tu información de ingresos
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Usamos esto para verificar que puedas realizar tus pagos cómodamente.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="employmentStatus" className="text-base">Estado de empleo *</Label>
            <select 
              id="employmentStatus" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.employmentStatus}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="full-time">Tiempo completo</option>
              <option value="part-time">Medio tiempo</option>
              <option value="self-employed">Independiente</option>
              <option value="unemployed">Desempleado</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="employer" className="text-base">Nombre del empleador</Label>
            <Input id="employer" className="h-12 text-lg" placeholder="Opcional" value={formData.employer} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyIncome" className="text-base">Monto de ingresos *</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input 
                id="monthlyIncome" 
                type="text" 
                required 
                className="h-12 text-lg pl-8" 
                placeholder="0" 
                value={formData.monthlyIncome} 
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, '');
                  if (val) {
                    val = Number(val).toLocaleString('en-US');
                  }
                  setFormData(prev => ({ ...prev, monthlyIncome: val }));
                }} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="incomeFrequency" className="text-base">¿Con qué frecuencia te pagan? *</Label>
            <select 
              id="incomeFrequency" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.incomeFrequency}
              onChange={handleChange}
            >
              <option value="">Selecciona la frecuencia</option>
              <option value="weekly">Semanalmente</option>
              <option value="biweekly">Cada dos semanas</option>
              <option value="monthly">Mensualmente</option>
              <option value="other">Otro</option>
            </select>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full h-14 text-lg mt-8 rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Continuar"}
        </Button>
      </form>
    </div>
  );
}
