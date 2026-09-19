"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Offer() {
  const router = useRouter();
  const applicationId = useApplicationStore((state) => state.applicationId);
  const [application, setApplication] = useState<any>(null);

  useEffect(() => {
    if (!applicationId) {
      router.push("/apply/step-1");
      return;
    }
    
    fetch(`/api/applications/${applicationId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setApplication(data.application);
        }
      });
  }, [applicationId, router]);

  const onAccept = () => {
    router.push("/apply/result");
  };

  if (!application) return null;

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-avanza-success/10 text-avanza-success rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Tus opciones de prueba están listas
        </h1>
        <p className="text-muted-foreground">
          ¡Buenas noticias! Basado en la información proporcionada, esta es tu oferta simulada.
        </p>
      </div>

      <Card className="border-primary/20 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#00d65f]" />
        <CardContent className="p-6 md:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Préstamo Personal Demo
            </span>
            <div className="text-5xl font-extrabold text-[#00d65f] mt-2">
              ${application.demoOfferAmount?.toLocaleString() || "3,000"}
            </div>
          </div>
          
          <div className="space-y-4 border-t pt-6">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Pago mensual estimado:</span>
              <span className="font-bold text-xl">${application.demoMonthlyPayment?.toFixed(2) || "142.50"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Plazo:</span>
              <span className="font-semibold">{application.demoTerm || 24} meses</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">APR estimado:</span>
              <span className="font-semibold">{application.demoApr || 18.95}%</span>
            </div>
          </div>
          
          <div className="mt-8 p-3 bg-muted text-xs text-center text-muted-foreground rounded-lg">
            ⚠️ DEMO / OFERTA SIMULADA — No es un compromiso de préstamo real.
          </div>
        </CardContent>
      </Card>

      <div className="pt-4">
        <Button size="lg" className="w-full h-14 text-lg rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" onClick={onAccept}>
          Aceptar oferta y continuar
        </Button>
      </div>
    </div>
  );
}
