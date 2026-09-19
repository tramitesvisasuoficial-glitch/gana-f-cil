"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function Processing() {
  const router = useRouter();

  useEffect(() => {
    // Simulate processing delay
    const timer = setTimeout(() => {
      router.push("/apply/offer");
    }, 4000); // 4 seconds for demo

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
      <Loader2 className="w-16 h-16 text-primary animate-spin" />
      
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">
        Revisando tu información...
      </h1>
      
      <div className="text-muted-foreground space-y-2 text-sm md:text-base animate-pulse">
        <p>• Revisando los detalles de la solicitud</p>
        <p>• Evaluando el perfil financiero</p>
        <p>• Preparando las opciones disponibles</p>
      </div>
    </div>
  );
}
