import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function SavingsSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg w-full max-w-lg border border-gray-100 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-20 h-20 text-[#00d65f]" />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
          ¡Solicitud enviada con éxito!
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Hemos recibido tus datos para iniciar tu plan de ahorros. Nuestro equipo ya está revisando tu información.
        </p>

        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 mb-8 text-left">
          <h2 className="font-bold text-black mb-2 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#00d65f]" />
            ¿Qué sigue ahora?
          </h2>
          <p className="text-sm text-gray-700">
            Para brindarte la mejor atención y configurar tu cuenta a la medida de tus metas, **uno de nuestros asesores financieros se pondrá en contacto contigo en breve**.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#20b858] font-bold h-14 rounded-full shadow-lg">
            <a href="https://wa.me/1234567890?text=Hola,%20acabo%20de%20enviar%20mi%20solicitud%20para%20abrir%20una%20cuenta%20de%20ahorros%20Set%20&%20Save.%20Quisiera%20hablar%20con%20un%20asesor." target="_blank" rel="noopener noreferrer">
              Hablar con un asesor ahora (WhatsApp)
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full font-bold h-14 rounded-full">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
