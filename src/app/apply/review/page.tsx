"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useApplicationStore } from "@/store/useApplicationStore";
import { trackLead } from "@/components/shared/MetaPixel";

export default function ReviewApplication() {
  const router = useRouter();
  const applicationId = useApplicationStore((state) => state.applicationId);
  const [application, setApplication] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!applicationId) {
      router.push("/apply/step-1");
      return;
    }
    
    // Fetch current data for review
    fetch(`/api/applications/${applicationId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setApplication(data.application);
        }
      });
  }, [applicationId, router]);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/applications/${applicationId}/submit`, {
        method: "POST",
      });
      const data = await response.json();
      
      if (data.success) {
        trackLead(); // Meta Pixel: Lead — envío real de formulario exitoso
        router.push("/apply/processing");
      } else {
        alert("Error al enviar la solicitud");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!application) return null;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Revisa tu solicitud
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Asegúrate de que todo esté correcto antes de enviar.
        </p>
      </div>

      <div className="bg-muted/30 rounded-xl p-6 space-y-6 text-left">
        <div>
          <h3 className="font-semibold text-lg border-b pb-2 mb-3">Ubicación</h3>
          <p className="text-sm"><span className="text-muted-foreground">Código Postal:</span> {application.zipCode}</p>
          <p className="text-sm"><span className="text-muted-foreground">Estado:</span> {application.state}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg border-b pb-2 mb-3">Personal</h3>
          <p className="text-sm"><span className="text-muted-foreground">Nombre:</span> {application.firstName} {application.lastName}</p>
          {application.dateOfBirth && (
            <p className="text-sm"><span className="text-muted-foreground">Fecha de Nacimiento:</span> {new Date(application.dateOfBirth).toLocaleDateString()}</p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-lg border-b pb-2 mb-3">Financiero</h3>
          <p className="text-sm"><span className="text-muted-foreground">Ingresos:</span> ${application.monthlyIncome}</p>
          <p className="text-sm"><span className="text-muted-foreground">Monto solicitado:</span> ${application.requestedAmount}</p>
        </div>
        
        <p className="text-xs text-muted-foreground italic text-center mt-4">
          (Los demás detalles se han guardado de forma segura)
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button variant="outline" size="lg" className="w-full rounded-full" onClick={() => router.push("/apply/step-1")} disabled={isLoading}>
          Editar Información
        </Button>
        <Button size="lg" className="w-full rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" onClick={onSubmit} disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar Solicitud"}
        </Button>
      </div>
    </div>
  );
}
