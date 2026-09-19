import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-[#fcfaf9] text-black">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-2 w-full">
          
          {/* Column 1 */}
          <div className="flex-1 min-w-0">
            <h3 className="font-extrabold text-base mb-4 truncate">Avanza Financial</h3>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-black block truncate">Acerca</Link></li>
              <li><Link href="/" className="hover:text-black block truncate">Equipo</Link></li>
              <li><Link href="/" className="hover:text-black block truncate">Carreras</Link></li>
              <li><Link href="/blog" className="hover:text-black block truncate">Noticias</Link></li>
              <li><Link href="/" className="hover:text-black block truncate">Inversionistas</Link></li>
              <li><Link href="/" className="hover:text-black block leading-snug">Plataforma Empresarial</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-0">
            <h3 className="font-extrabold text-base mb-4 truncate">Ayuda</h3>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li><Link href="/support" className="hover:text-black block truncate">Ayuda de la app</Link></li>
              <li><Link href="/support" className="hover:text-black block truncate text-[#00d65f] font-bold">Quejas y Reclamos</Link></li>
              <li><Link href="/support" className="hover:text-black block truncate">Contáctanos</Link></li>
              <li><Link href="/terms" className="hover:text-black block truncate">Preguntas</Link></li>
              <li><Link href="/locations" className="hover:text-black block truncate">Sucursales</Link></li>
              <li><Link href="/blog" className="hover:text-black block leading-snug">Herramientas y aprendizaje</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-0">
            <h3 className="font-extrabold text-base mb-4 truncate">Productos</h3>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-black block truncate">Hacer un pago</Link></li>
              <li><Link href="/loans" className="hover:text-black block leading-snug">Préstamos personales</Link></li>
              <li><Link href="/savings" className="hover:text-black block truncate">Ahorros: Set & Save</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex-[1.2] min-w-0">
            <h3 className="font-extrabold text-base mb-4 truncate">Contáctanos</h3>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li><span className="font-bold text-black block truncate">Avanza Financial</span></li>
              <li><span className="hover:text-black block leading-snug">Suite 200, 123 Business Blvd<br/>Miami, FL 33131</span></li>
              <li className="pt-2"><span className="font-bold text-black block truncate">Préstamos</span></li>
              <li><span className="hover:text-black block truncate">(555) 123-4567</span></li>
              <li><Link href="mailto:hola@avanzafinancial.com" className="hover:text-black block truncate">hola@Avanza...com</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="flex-[1.8] min-w-0">
            <h3 className="font-extrabold text-base mb-2 truncate">Mantente informado</h3>
            <p className="text-sm text-black leading-snug mb-3">
              Inscríbete para recibir información actualizada.
            </p>
            <div className="flex flex-row gap-1 mb-6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full h-8 border border-gray-400 rounded-[20px] px-2 text-sm focus:outline-none focus:border-black min-w-0"
              />
              <Button className="bg-black text-white hover:bg-black/90 font-bold h-8 rounded-[20px] text-sm px-3 shrink-0">
                Inscríbete
              </Button>
            </div>
            
            <div className="flex gap-2 mb-6">
              {/* Fake Social Icons */}
              <div className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-sm font-bold shrink-0">f</div>
              <div className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-sm font-bold shrink-0">Y</div>
              <div className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-sm font-bold shrink-0">t</div>
              <div className="w-4 h-4 bg-black rounded-full flex justify-center items-center text-white text-sm font-bold shrink-0">in</div>
            </div>

            <h3 className="font-extrabold text-base mb-2 leading-snug">Obtén la aplicación de Avanza Financial</h3>
            <p className="text-sm text-black leading-snug mb-3">
              Todas tus necesidades financieras en la palma de tu mano ↗
            </p>
            <div className="flex gap-1 flex-col sm:flex-row">
              <div className="bg-black text-white rounded-md px-1.5 py-1 flex items-center gap-1 cursor-pointer max-w-[90px]">
                 <span className="text-lg"></span>
                 <div className="flex flex-col">
                   <span className="text-xs leading-none">Consíguelo en el</span>
                   <span className="text-xs font-bold leading-none">App Store</span>
                 </div>
              </div>
              <div className="bg-black text-white rounded-md px-1.5 py-1 flex items-center gap-1 cursor-pointer max-w-[90px]">
                 <span className="text-base">▶</span>
                 <div className="flex flex-col">
                   <span className="text-xs leading-none">DISPONIBLE EN</span>
                   <span className="text-xs font-bold leading-none">Google Play</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col border-t border-gray-200">
          {/* Bottom links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 mb-8 w-full">
            <h3 className="font-extrabold text-2xl tracking-tight">Avanza Financial</h3>
            <div className="flex flex-row items-center justify-start md:justify-end gap-x-6 flex-wrap flex-1 text-left md:text-right">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-black">Términos de uso</Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-black">Privacidad</Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-black max-w-[80px] leading-snug text-center">Configuración de privacidad</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-black">Accesibilidad</Link>
              <div className="w-6 h-6 border-[1.5px] border-black flex justify-center items-center shrink-0"><span className="text-base font-bold leading-none">⌂</span></div>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            <p className="mb-4">Ver los avisos y licencias estatales.</p>
            <p className="mb-4 ml-4">Residentes de New Jersey: Este es un anuncio de un préstamo personal.</p>
            <p className="mb-4 ml-4">
              Solo en New Mexico: PARA DENUNCIAR UN PROBLEMA O UNA QUEJA CON ESTE PRESTAMISTA, PUEDE ESCRIBIR O LLAMAR A: Customer Experience - Contact Manager, Oportun, PO Box 560910, The Colony, TX 75056; 888-408-3020; Complaints@oportun.com. Este prestamista está autorizado y regulado por el Departamento de Regulación y Licencias de New Mexico, División de Instituciones Financieras, PO Box 25101, 2550 Cerrillos Road, Santa Fe, New Mexico 87504. Para reportar cualquier problema o queja no resueltos, comuníquese con la división al 505-476-4885 o visite el sitio web ↗.
            </p>
            <p className="mb-6 ml-4 font-bold">NMLS #1571904. Ver la base de datos de acceso al consumidor de NMLS ↗.</p>
            
            <p className="mb-8 flex items-start gap-1">
              <span className="mt-0.5">↗</span>
              <span>Las políticas de seguridad, de privacidad y los términos del sitio web de Avanza Financial no aplican a los sitios externos que mencionamos. Consulte las políticas de seguridad, de privacidad y los términos de esos sitios de Internet para saber cómo son pertinentes en su caso. Avanza Financial no es responsable de (ni proporciona) ningún producto, servicio o contenido en este sitio o app tercero, a excepción de los productos y servicios que explícitamente llevan nuestro nombre.</span>
            </p>
            
            <p className="mb-4">Información sobre préstamos personales</p>
            <p className="mb-4 ml-4">
              Información sobre la compañía financiera: Los préstamos personales en NM y WI son otorgados por Avanza Financial Inc. En los demás estados donde opera Avanza Financial de AL, AK, AR, AZ, CA, DE, FL, GA, HI, ID, IL, IN, KS, KY, LA, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NV, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, and WY los préstamos a través de Avanza Financial son originados por Pathward®, N.A., Column N.A., Miembro de la FDIC, o ambas entidades.
            </p>
            <p className="mb-6 ml-4">
              ESTA ES SOLO UNA SOLICITUD DE PRÉSTAMO. AVANZA FINANCIAL NO ES UN PRESTAMISTA DIRECTO NI TOMA DECISIONES CREDITICIAS. NUESTRO SERVICIO ES CONECTAR A LOS SOLICITANTES CON UNA RED DE PRESTAMISTAS Y BANCOS ASOCIADOS INDEPENDIENTES. LA APROBACIÓN FINAL Y LOS TÉRMINOS SERÁN DETERMINADOS EXCLUSIVAMENTE POR EL PRESTAMISTA QUE LO APRUEBE. ESTE SERVICIO ES GRATUITO PARA LOS USUARIOS (RECIBIMOS COMPENSACIÓN DE NUESTROS SOCIOS).
            </p>

            <p className="mb-4">
              <span className="font-bold text-black">Términos del producto:</span> Los productos de préstamos están sujetos a la aprobación del crédito. Los montos más altos de préstamos requieren un gravamen preferente sobre un vehículo motorizado que cumpla con los criterios de Avanza Financial. Los términos varían según el solicitante y el estado, y están sujetos a cambio. No se requiere un historial de crédito previo para calificar, pero se pedirán los reportes de crédito de todos los solicitantes y se tomarán en consideración. El historial de pagos de la cuenta se reporta a determinados burós de crédito nacionales. La precalificación no impactará su puntaje de crédito con las agencias nacionales que reportan el crédito hasta que usted envíe su solicitud de préstamo para la aprobación final. Las cantidades típicas de los préstamos personales son de $500 a $4,500 para nuevos clientes, de $2,000 a $8,000 para miembros frecuentes, y las cantidades de los préstamos personales con garantía son de $3,700 a $13,700, basados en la información de préstamos aprobados previamente, los cuales pueden no representar los términos actuales. Los préstamos están sujetos a una tarifa de originación.
            </p>
          </div>
          
          <div className="rounded-lg bg-gray-50 p-4 text-xs text-gray-500 border border-gray-100 mt-4">
            <p className="font-bold text-black mb-1 text-sm">Demo Disclosure:</p>
            <p className="leading-tight">
              Este sitio web es un prototipo con fines de demostración. No es un banco, prestamista ni corredor de préstamos y no otorga préstamos reales.
            </p>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Avanza Financial Demo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
