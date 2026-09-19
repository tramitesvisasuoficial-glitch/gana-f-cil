import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Banner */}
      <div className="w-full h-64 md:h-96 bg-gray-900 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80" 
          alt="Finanzas" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-3xl text-center text-white">
            <span className="bg-[#00d65f] text-black font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4 inline-block">Educación Financiera</span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Guía completa para tomar el control de tu dinero
            </h1>
            <p className="text-gray-300">Publicado el 15 de Octubre, 2023 • 5 min de lectura</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl mt-12">
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-black mb-8 text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a todos los artículos
        </Link>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-gray-800">
          <p className="lead text-xl text-gray-600 mb-8">
            Administrar tus finanzas personales no tiene que ser complicado. Ya sea que estés buscando mejorar tu puntaje de crédito, ahorrar para un fondo de emergencia o entender cómo funcionan los préstamos, el primer paso es la educación.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">1. Entiende a dónde va tu dinero</h2>
          <p className="mb-6">
            La regla del 50/30/20 es un excelente punto de partida. Asigna el 50% de tus ingresos a las necesidades básicas (vivienda, comida, transporte), el 30% a gastos personales (entretenimiento, salidas) y el 20% a tus metas financieras (ahorros, pago de deudas).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">2. El poder del crédito</h2>
          <p className="mb-6">
            Tu puntaje crediticio es como tu pasaporte financiero. Mantener el uso de tus tarjetas por debajo del 30% de su límite y realizar todos tus pagos a tiempo son las dos formas más rápidas de ver un incremento en tu puntaje.
          </p>

          <div className="bg-gray-50 border-l-4 border-[#00d65f] p-6 my-8 rounded-r-lg">
            <h3 className="font-bold text-black m-0 mb-2">💡 Consejo Avanza</h3>
            <p className="m-0 text-gray-600 text-base">
              Si estás considerando pedir un préstamo personal, precalificar con nosotros no afecta tu puntaje de crédito. Es una forma segura de conocer tus opciones antes de comprometerte.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">3. Ahorrar de forma inteligente</h2>
          <p className="mb-6">
            No dependas de tu memoria para ahorrar. Usa sistemas automatizados (como nuestro plan Set & Save) que descuenten pequeñas cantidades de forma periódica. A la larga, la constancia vence a la cantidad.
          </p>
        </article>

        <hr className="my-12 border-gray-200" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
              AF
            </div>
            <div>
              <p className="font-bold text-black text-sm">Equipo Avanza Financial</p>
              <p className="text-xs text-gray-500">Expertos en educación financiera</p>
            </div>
          </div>

          <Button variant="outline" className="rounded-full gap-2 font-medium">
            <Share2 className="w-4 h-4" />
            Compartir artículo
          </Button>
        </div>

      </div>
    </div>
  );
}
