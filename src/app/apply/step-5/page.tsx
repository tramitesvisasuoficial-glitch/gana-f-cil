"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Step5Financial() {
  const router = useRouter();
  const applicationId = useApplicationStore((state) => state.applicationId);
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    requestedAmount: "",
    loanPurpose: "",
    bankStatus: "",
    creditProfile: "",
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
          requestedAmount: formData.requestedAmount ? parseFloat(formData.requestedAmount) : 0,
          loanPurpose: formData.loanPurpose,
          bankStatus: formData.bankStatus,
          creditProfile: formData.creditProfile,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        router.push("/apply/step-6");
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
          Tus necesidades de préstamo
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Veamos qué tipo de préstamo funciona mejor para ti.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="requestedAmount" className="text-base">Monto solicitado *</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input id="requestedAmount" type="number" required min="500" max="10000" className="h-12 text-lg pl-8" placeholder="3000" value={formData.requestedAmount} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanPurpose" className="text-base">Propósito del préstamo *</Label>
            <select 
              id="loanPurpose" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.loanPurpose}
              onChange={handleChange}
            >
              <option value="">Selecciona el propósito</option>
              <option value="debt">Consolidación de deudas</option>
              <option value="home">Mejoras al hogar</option>
              <option value="purchase">Compra importante</option>
              <option value="business">Negocio</option>
              <option value="personal">Personal</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bankStatus" className="text-base">Estado de la cuenta bancaria *</Label>
            <select 
              id="bankStatus" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.bankStatus}
              onChange={handleChange}
            >
              <option value="">Selecciona el estado</option>
              <option value="active">Cuenta activa</option>
              <option value="new">Cuenta nueva</option>
              <option value="none">Sin cuenta</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="creditProfile" className="text-base">Perfil de crédito *</Label>
            <select 
              id="creditProfile" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.creditProfile}
              onChange={handleChange}
            >
              <option value="">Selecciona el perfil</option>
              <option value="established">Historial establecido</option>
              <option value="building">Construyendo crédito</option>
              <option value="none">Sin historial</option>
              <option value="rebuilding">Reconstruyendo</option>
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
