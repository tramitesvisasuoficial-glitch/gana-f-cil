"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Step6Immigration() {
  const router = useRouter();
  const applicationId = useApplicationStore((state) => state.applicationId);
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    residencyStatus: "",
    idType: "",
  });

  useEffect(() => {
    if (!applicationId) {
      router.push("/apply/step-1");
    }
  }, [applicationId, router]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        router.push("/apply/review");
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
          ¡Casi terminamos!
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Detalles finales para completar tu perfil.
        </p>
      </div>

      <div className="p-4 bg-muted text-muted-foreground text-sm rounded-lg mb-6 max-w-sm mx-auto text-center">
        ⚠️ DEMO — Esta es una simulación. Ingresa solo datos de prueba. No uses identificadores reales.
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="residencyStatus" className="text-base">Estado de residencia *</Label>
            <select 
              id="residencyStatus" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.residencyStatus}
              onChange={handleChange}
            >
              <option value="">Selecciona el estado</option>
              <option value="citizen">Ciudadano de EE. UU.</option>
              <option value="resident">Residente permanente</option>
              <option value="visa">Titular de visa</option>
              <option value="other">Otro estado elegible</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="idType" className="text-base">Tipo de identificación *</Label>
            <select 
              id="idType" 
              required 
              className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.idType}
              onChange={handleChange}
            >
              <option value="">Selecciona el tipo de ID</option>
              <option value="ssn">SSN</option>
              <option value="itin">ITIN</option>
              <option value="passport">Pasaporte de tu país</option>
              <option value="consular">Matrícula Consular</option>
              <option value="other">Otro documento oficial</option>
            </select>
            <p className="text-sm font-medium text-[#00d65f] mt-2 bg-green-50 p-2 rounded-md border border-green-100">
              ¡Aceptamos ITIN, Pasaporte y Matrícula Consular! No necesitas un SSN para aplicar.
            </p>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full h-14 text-lg mt-8 rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Revisar solicitud"}
        </Button>
      </form>
    </div>
  );
}
