import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Política de Privacidad</h1>
        
        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-black mb-3">1. Introducción</h2>
            <p>
              En Avanza Financial ("nosotros", "nuestro" o "la Compañía"), respetamos su privacidad y estamos comprometidos a protegerla mediante el cumplimiento de esta política. Esta política describe los tipos de información que podemos recopilar de usted o que usted puede proporcionar cuando visita el sitio web avanzafinancial.com (nuestro "Sitio Web") y nuestras prácticas para recopilar, usar, mantener, proteger y divulgar esa información.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">2. Información que recopilamos sobre usted</h2>
            <p>Recopilamos varios tipos de información de y sobre los usuarios de nuestro Sitio Web, incluyendo información:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Por la cual se le pueda identificar personalmente, como nombre, dirección postal, dirección de correo electrónico, número de teléfono, u otro identificador ("información personal").</li>
              <li>Información financiera necesaria para procesar solicitudes de préstamos, evaluar la solvencia crediticia y conectar con posibles prestamistas.</li>
              <li>Sobre su conexión a internet, el equipo que utiliza para acceder a nuestro Sitio Web y detalles de uso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">3. Cómo utilizamos su información</h2>
            <p>Utilizamos la información que recopilamos sobre usted o que nos proporciona, incluida cualquier información personal:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Para presentarle nuestro Sitio Web y sus contenidos.</li>
              <li>Para proporcionarle la información, productos o servicios que nos solicita.</li>
              <li>Para procesar y evaluar solicitudes de crédito y conectar su perfil con instituciones financieras asociadas.</li>
              <li>Para cumplir con nuestras obligaciones y hacer valer nuestros derechos derivados de cualquier contrato celebrado entre usted y nosotros.</li>
              <li>Para notificarle sobre cambios en nuestro Sitio Web o en cualquier producto o servicio que ofrezcamos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">4. Divulgación de su información</h2>
            <p>Podemos divulgar información agregada sobre nuestros usuarios sin restricciones. Podemos divulgar información personal que recopilamos o que usted proporciona según se describe en esta política de privacidad:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>A nuestras subsidiarias y filiales.</li>
              <li>A contratistas, proveedores de servicios, prestamistas, burós de crédito y otros terceros que utilizamos para respaldar nuestro negocio.</li>
              <li>A un comprador u otro sucesor en caso de fusión, desinversión, reestructuración, reorganización, disolución u otra venta o transferencia de algunos o todos los activos de Avanza Financial.</li>
              <li>Para cumplir con cualquier orden judicial, ley o proceso legal, lo que incluye responder a cualquier solicitud gubernamental o reglamentaria.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">5. Sus derechos y opciones</h2>
            <p>
              Nos esforzamos por brindarle opciones con respecto a la información personal que nos proporciona. Si no desea que su información sea compartida con terceros con fines promocionales, puede optar por no participar enviándonos un correo electrónico a privacy@avanzafinancial.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">6. Seguridad de los datos</h2>
            <p>
              Hemos implementado medidas diseñadas para asegurar su información personal contra pérdida accidental y acceso, uso, alteración y divulgación no autorizados. Toda la información que nos proporciona se almacena en nuestros servidores seguros detrás de firewalls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">7. Contacto</h2>
            <p>
              Para hacer preguntas o comentarios sobre esta política de privacidad y nuestras prácticas de privacidad, contáctenos en:
              <br /><br />
              <strong>Avanza Financial</strong><br />
              Suite 200, 123 Business Blvd<br />
              Miami, FL 33131<br />
              privacy@avanzafinancial.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
