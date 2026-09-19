import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, PiggyBank, ShieldCheck } from "lucide-react";

export default function SavingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <section className="bg-[#1D2129] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Set & Save™</h1>
          <p className="text-lg md:text-xl text-[#aeb9c3]">
            La forma más inteligente y automática de construir tu futuro financiero.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl mt-12 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ahorra sin darte cuenta</h2>
          <p className="text-gray-600 text-lg">
            Nuestro programa Set & Save aprende de tus hábitos financieros y transfiere inteligentemente pequeñas cantidades de dinero a tu cuenta de ahorros, asegurando que crezca sin afectar tu presupuesto diario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <TrendingUp className="w-12 h-12 text-[#00d65f] mb-4" />
            <h3 className="font-bold mb-2">Crece Automáticamente</h3>
            <p className="text-sm text-gray-500">Nosotros hacemos el trabajo pesado analizando tus finanzas y apartando el dinero ideal en el momento perfecto.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <PiggyBank className="w-12 h-12 text-[#00d65f] mb-4" />
            <h3 className="font-bold mb-2">Alcanza tus Metas</h3>
            <p className="text-sm text-gray-500">En promedio, nuestros miembros logran ahorrar más de $1,800 al año usando esta herramienta.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 text-[#00d65f] mb-4" />
            <h3 className="font-bold mb-2">Seguro y Protegido</h3>
            <p className="text-sm text-gray-500">Tus fondos están siempre disponibles para ti cuando los necesites, respaldados por la más alta seguridad bancaria.</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild size="lg" className="bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold px-10 rounded-full">
            <Link href="/apply-savings">Comenzar a ahorrar ahora</Link>
          </Button>
        </div>

      </section>
    </div>
  );
}
