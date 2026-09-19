"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Step2Personal() {
  const router = useRouter();
  const applicationId = useApplicationStore((state) => state.applicationId);
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (!applicationId) {
      router.push("/apply/step-1");
    }
  }, [applicationId, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        router.push("/apply/step-3");
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
          Cuéntanos sobre ti
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Ingresa tu nombre exactamente como aparece en tu identificación.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-base">Nombre *</Label>
            <Input id="firstName" required className="h-12 text-lg" value={formData.firstName} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-base">Apellidos *</Label>
            <Input id="lastName" required className="h-12 text-lg" value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="text-base">Fecha de nacimiento *</Label>
            <Input id="dateOfBirth" type="date" required className="h-12 text-lg" value={formData.dateOfBirth} onChange={handleChange} />
            <p className="text-xs text-muted-foreground">Debes tener al menos 18 años de edad.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">Correo electrónico *</Label>
            <Input id="email" type="email" required className="h-12 text-lg" placeholder="tu@email.com" value={formData.email} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">Número de teléfono *</Label>
            <Input id="phone" type="tel" required className="h-12 text-lg" placeholder="(555) 555-5555" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full h-14 text-lg mt-8 rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Continuar"}
        </Button>
      </form>
    </div>
  );
}
