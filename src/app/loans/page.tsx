import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <section className="bg-[#1D2129] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Préstamos a tu medida</h1>
          <p className="text-lg md:text-xl text-[#aeb9c3]">
            Opciones flexibles, aprobación rápida y tasas justas para ayudarte a alcanzar tus metas.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl -mt-8 relative z-10 space-y-8">
        
        {/* Personal Loans */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Préstamos Personales</h2>
          <p className="text-gray-600 mb-6">
            Obtén desde $300 hasta $10,000 sin necesidad de presentar aval o garantía. Ideal para consolidar deudas, pagar facturas médicas o hacer reparaciones en el hogar.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00d65f]" /><span>No afecta tu puntaje de crédito al precalificar.</span></li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00d65f]" /><span>Depósito directo en 24 horas.</span></li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00d65f]" /><span>Pagos mensuales fijos y predecibles.</span></li>
          </ul>
          <Button asChild className="bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold px-8">
            <Link href="/apply">Aplicar para préstamo personal</Link>
          </Button>
        </div>

        {/* Title Loans */}
        <div id="title-loans" className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Préstamos con Garantía (Title Loans)</h2>
          <p className="text-gray-600 mb-6">
            ¿Necesitas más dinero? Usa el título de tu auto para obtener desde $2,525 hasta $18,500. Sigues conduciendo tu auto mientras pagas el préstamo.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00d65f]" /><span>Obtén más dinero por usar tu auto como garantía.</span></li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00d65f]" /><span>Tasas de interés (APR) más bajas que los préstamos tradicionales.</span></li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00d65f]" /><span>Sigue manejando tu vehículo con normalidad.</span></li>
          </ul>
          <Button asChild className="bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold px-8">
            <Link href="/apply">Aplicar para préstamo con garantía</Link>
          </Button>
        </div>

      </section>
    </div>
  );
}
