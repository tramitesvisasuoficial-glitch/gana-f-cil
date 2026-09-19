import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const articles = [
    {
      title: "Cómo mejorar tu puntaje de crédito rápidamente",
      category: "Crédito",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      excerpt: "Descubre las estrategias probadas para subir tu puntaje crediticio en menos de 90 días."
    },
    {
      title: "¿Cuánto deberías tener en tu fondo de emergencia?",
      category: "Ahorros",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80",
      excerpt: "El fondo de emergencia es tu red de seguridad. Aprende a calcular cuánto necesitas guardar."
    },
    {
      title: "Cómo obtener la aprobación para un préstamo",
      category: "Préstamos",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80",
      excerpt: "Conoce los 5 factores principales que evalúan las entidades financieras al aprobar un préstamo."
    },
    {
      title: "El método 50/30/20 para organizar tus finanzas",
      category: "Presupuesto",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      excerpt: "La regla de oro del presupuesto personal. Divide tus ingresos y toma el control de tu dinero."
    },
    {
      title: "Errores comunes al usar tarjetas de crédito",
      category: "Deudas",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      excerpt: "Evita estas trampas financieras que pueden costarte miles de dólares en intereses."
    },
    {
      title: "Guía para comprar tu primer auto usado",
      category: "Compras Inteligentes",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      excerpt: "Todo lo que necesitas saber antes de ir al concesionario o pedir financiamiento vehicular."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <section className="bg-[#1D2129] text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Educación Financiera</h1>
          <p className="text-lg md:text-xl text-[#aeb9c3]">
            Recursos, consejos y guías para que tomes el control de tu dinero.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-5xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link href={`/blog/${index + 1}`} key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden relative bg-gray-200">
                {article.image.startsWith('http') ? (
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    [Imagen]
                  </div>
                )}
                <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2 text-black leading-tight group-hover:text-[#00d65f] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-[#00d65f] font-bold text-sm">Leer artículo &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="font-bold rounded-full px-8">
            Cargar más artículos
          </Button>
        </div>
      </section>
    </div>
  );
}
