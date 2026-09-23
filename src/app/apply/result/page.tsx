"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, ArrowRight, Wallet, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Result() {
  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-6 max-w-2xl mx-auto">
      <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-2 shadow-sm">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          ¡Felicidades, tu préstamo ha sido Pre-Aprobado!
        </h1>
        <p className="text-muted-foreground text-lg px-4">
          Tu solicitud ha superado exitosamente nuestras validaciones iniciales de crédito y prevención de fraudes.
        </p>
      </div>

      <Card className="w-full border-green-500/30 bg-green-50/30 shadow-md">
        <CardContent className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-xl text-green-600 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground mb-1">Último paso para tu desembolso</h3>
              <p className="text-muted-foreground">
                Por motivos de seguridad y de acuerdo con las normativas financieras actuales, realizamos los desembolsos exclusivamente a través de nuestra plataforma aliada oficial.
              </p>
            </div>
          </div>

          <div className="bg-background border rounded-xl p-5 shadow-inner">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-blue-500" />
              Instrucciones para recibir tu dinero:
            </h4>
            <ol className="space-y-3 text-sm md:text-base text-muted-foreground list-decimal list-inside">
              <li>Haz clic en el botón de abajo para ir a <strong>VeraTransfers</strong>.</li>
              <li>Crea tu cuenta segura (toma menos de 2 minutos).</li>
              <li>Una vez creada, el sistema vinculará automáticamente tu préstamo.</li>
              <li>Los fondos se reflejarán en tu nueva billetera de inmediato.</li>
            </ol>
          </div>
          
          <div className="flex bg-blue-50/50 text-blue-800 text-sm p-4 rounded-lg items-start gap-3 border border-blue-100">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              <strong>Importante:</strong> Tu pre-aprobación tiene una validez de 24 horas. Te recomendamos crear tu cuenta en VeraTransfers ahora mismo para garantizar la tasa y condiciones acordadas.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="w-full pt-4 space-y-4">
        <Button size="lg" className="w-full h-16 text-lg rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2" asChild>
          <a href="https://veratransfers.vercel.app" target="_blank" rel="noopener noreferrer">
            Crear mi cuenta en VeraTransfers <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Al hacer clic, serás redirigido de forma segura a la plataforma de VeraTransfers.
        </p>
      </div>
    </div>
  );
}

