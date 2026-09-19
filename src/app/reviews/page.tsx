import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Claudia M.",
      platform: "Google",
      date: "Hace 2 semanas",
      text: "Todo el proceso fue extremadamente fácil. Apliqué en línea desde mi teléfono y el dinero estaba en mi cuenta al día siguiente. Muy recomendados si necesitas efectivo rápido sin tanto papeleo."
    },
    {
      id: 2,
      name: "Roberto S.",
      platform: "Trustpilot",
      date: "Hace 1 mes",
      text: "Tenía dudas porque mi crédito no es perfecto, pero me dieron una oportunidad. Las tasas son justas y el portal para pagar es muy claro. Son de gran ayuda."
    },
    {
      id: 3,
      name: "María Fernanda T.",
      platform: "Google",
      date: "Hace 2 meses",
      text: "Fui a la sucursal de Los Ángeles pero me dijeron que podía hacerlo en línea más rápido. Tenían razón, en 5 minutos ya estaba aprobada. Excelente servicio al cliente."
    },
    {
      id: 4,
      name: "José L.",
      platform: "Facebook",
      date: "Hace 3 meses",
      text: "Utilizo Avanza Financial cada vez que tengo una emergencia médica o necesito arreglar mi carro. Nunca me han fallado y no hay comisiones ocultas."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-16">
      {/* Header Section */}
      <section className="bg-[#1D2129] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Nuestros clientes hablan por nosotros
          </h1>
          <p className="text-lg md:text-xl text-[#aeb9c3] mb-8">
            Más de 115,000 reseñas de 5 estrellas respaldan nuestro compromiso con tu tranquilidad financiera.
          </p>
          <div className="flex justify-center items-center gap-1 text-[#00d65f]">
            <Star className="fill-current w-8 h-8" />
            <Star className="fill-current w-8 h-8" />
            <Star className="fill-current w-8 h-8" />
            <Star className="fill-current w-8 h-8" />
            <Star className="fill-current w-8 h-8" />
          </div>
          <p className="font-bold mt-2 text-[14px]">Calificación Excelente (4.9/5)</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-4 max-w-5xl -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-1 text-[#00d65f] mb-4">
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
              </div>
              <p className="text-gray-800 font-medium italic mb-6 text-[15px] flex-1">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                <div>
                  <h3 className="font-bold text-black">{review.name}</h3>
                  <p className="text-xs text-gray-500">Reseña verificada en {review.platform}</p>
                </div>
                <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 max-w-4xl mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Únete a nuestros miles de clientes satisfechos</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Comprueba por ti mismo lo fácil, rápido y seguro que es conseguir un préstamo con nosotros. 
          Aplica hoy mismo y recibe tu dinero en 24 horas.
        </p>
        <Button asChild size="lg" className="bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold px-10 py-6 rounded-full text-lg shadow-xl">
          <Link href="/apply">Comenzar mi solicitud</Link>
        </Button>
      </section>
    </div>
  );
}
