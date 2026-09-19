"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Result() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-6 text-center max-w-lg mx-auto">
      <div className="w-20 h-20 bg-avanza-success/10 text-[#00d65f] rounded-full flex items-center justify-center mb-2">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      
      <h1 className="text-3xl font-bold text-foreground">
        ¡Demo Aprobado!
      </h1>
      
      <div className="space-y-4 text-muted-foreground text-lg">
        <p>
          Tu solicitud de prueba ha sido aprobada. 
        </p>
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="font-semibold text-foreground mb-1">RESULTADO DEMO</p>
          <p className="text-sm">Este prototipo no emite préstamos reales. En una aplicación real, ahora serías redirigido a tu panel de control para subir documentos y firmar tu contrato.</p>
        </div>
      </div>
      
      <div className="w-full pt-8 space-y-4">
        <Button size="lg" className="w-full h-14 rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" asChild>
          <Link href="/">Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  );
}
