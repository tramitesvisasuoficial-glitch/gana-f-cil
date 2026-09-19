export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <section className="bg-gray-100 py-12 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-extrabold mb-2">Términos, Condiciones y FAQ</h1>
          <p className="text-gray-600">Información legal y preguntas frecuentes de Avanza Financial.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-4xl py-12 prose prose-sm md:prose-base">
        <h2>Preguntas Frecuentes (FAQ)</h2>
        
        <h3>¿Puedo recibir la precalificación sin impactar mi puntaje de crédito?</h3>
        <p>Sí, utilizamos una consulta suave (soft pull) que no afecta tu puntaje de crédito para mostrarte las ofertas disponibles. Solo se realizará una consulta dura (hard pull) si decides aceptar la oferta y firmar el contrato.</p>

        <h3>¿Qué documentación necesito para solicitar un préstamo?</h3>
        <p>Normalmente solo requerimos una identificación oficial vigente, comprobante de ingresos (como recibos de pago o estados de cuenta bancarios) y comprobante de domicilio. El proceso en línea te permite tomar fotos de estos documentos y subirlos fácilmente.</p>

        <h3>¿Puede haber más de una persona que firme un préstamo?</h3>
        <p>Por el momento, nuestros préstamos personales estándar son individuales. Sin embargo, para ciertos préstamos con garantía, podemos evaluar opciones conjuntas si ambos titulares están en el título del vehículo.</p>

        <hr className="my-8" />

        <h2>Términos de Préstamos Personales</h2>
        <p>Los préstamos personales de Avanza Financial están sujetos a aprobación de crédito e ingresos. Las tasas de interés (APR) varían según el perfil crediticio, historial de pagos, estado de residencia y plazo del préstamo. Los montos de los préstamos van desde $300 hasta $10,000, aunque los mínimos y máximos legales pueden aplicar según el estado.</p>
        <p>Toda la información proporcionada durante la solicitud debe ser verídica. Avanza Financial se reserva el derecho de cancelar cualquier solicitud en caso de detectar información fraudulenta o inconsistencias severas.</p>
      </section>
    </div>
  );
}
