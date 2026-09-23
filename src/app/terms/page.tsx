import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Términos, Condiciones y FAQ</h1>
        
        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-black mb-3">1. Naturaleza del Servicio y Aviso de Facebook</h2>
            <p>
              <strong>AVISO IMPORTANTE:</strong> Avanza Financial actúa como un servicio de tecnología e información. Este sitio web no ofrece préstamos directos. Nuestro servicio consiste en recopilar información y transmitirla a nuestra red de prestamistas y bancos autorizados. La aprobación, términos y financiación son decididos exclusivamente por la institución financiera correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">2. Términos de Uso</h2>
            <p>
              Al utilizar este servicio, usted acepta que la información provista es verdadera y autoriza a Avanza Financial y a sus socios a realizar verificaciones de crédito preliminares (soft pulls). Ninguna precalificación garantiza la aprobación final de un crédito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">Preguntas Frecuentes (FAQ)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black">¿Puedo recibir la precalificación sin impactar mi puntaje de crédito?</h3>
                <p>Sí, utilizamos una consulta suave (soft pull) que no afecta tu puntaje de crédito para mostrarte las ofertas disponibles. Solo se realizará una consulta dura (hard pull) si decides aceptar la oferta y firmar el contrato.</p>
              </div>
              <div>
                <h3 className="font-bold text-black">¿Qué documentación necesito para solicitar un préstamo?</h3>
                <p>Normalmente solo requerimos una identificación oficial vigente, comprobante de ingresos y comprobante de domicilio. <strong>Aceptamos a inmigrantes con ITIN, Pasaporte de su país de origen o Matrícula Consular.</strong> ¡No es obligatorio tener SSN!</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
