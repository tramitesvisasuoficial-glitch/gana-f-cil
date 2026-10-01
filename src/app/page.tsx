"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroFunnel } from "@/components/home/HeroFunnel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-6 pb-6 w-full overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 pr-0 md:pr-4 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-[1.1] mb-3">
                Tus metas financieras son
                <span className="relative inline-block ml-2">
                  las nuestras
                  <div className="absolute bottom-1 left-0 w-full h-[3px] bg-[#00d65f] -z-10"></div>
                </span>
              </h1>
              
              <p className="text-base text-black mb-6 max-w-md font-medium leading-snug mx-auto md:mx-0">
                Préstamos accesibles de $300 a $10,000 para que llegues hasta donde quieras.
              </p>

              <div className="flex flex-col items-center md:items-start gap-4">
                <p className="text-base text-black font-semibold text-center md:text-left">
                  ¿Necesitas dinero para cubrir un gasto importante?
                </p>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-6 py-6 md:py-3 rounded-[30px] text-base w-full md:w-auto text-center">
                    <Link href="/apply">Conoce tus opciones</Link>
                  </Button>
                  <a
                    href="https://wa.me/19295909116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-row items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1DA851] font-bold px-6 py-4 md:py-3 rounded-[30px] text-base w-full md:w-auto transition-colors"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    <span>Habla ahora con un asesor</span>
                  </a>
                </div>

                <div className="flex flex-col gap-1 text-center md:text-left mt-1">
                  <p className="font-bold text-black text-sm">
                    Precalifica en minutos sin afectar tu puntaje de crédito.
                  </p>
                  <Link href="/terms" className="text-xs text-gray-500 underline decoration-gray-400 underline-offset-4">
                    Ver condiciones de préstamos personales
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content (Funnel) */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center md:justify-end py-2">
              <HeroFunnel />
            </div>

          </div>
        </div>
      </section>

      {/* VeraTransfers Section */}
      <section className="bg-[#fcfaf9] py-12 md:py-16 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
          <div className="relative">
            {/* Badge Graphic */}
            <div className="bg-[#00d65f] text-black px-5 py-5 rounded-t-none rounded-b-[20px] flex flex-col items-center justify-center relative clip-badge w-[80px] shadow-sm">
              <div className="flex gap-1 mb-1 absolute -top-3">
                <span className="text-[#00d65f] text-lg drop-shadow-md">★</span>
                <span className="text-[#00d65f] text-xl drop-shadow-md">★</span>
                <span className="text-[#00d65f] text-lg drop-shadow-md">★</span>
              </div>
              <span className="text-xl font-black leading-none mt-3">#1</span>
              <span className="text-xs font-bold leading-tight text-center mt-1">billetera<br/>virtual</span>
              {/* Decorative ribbon tails */}
              <div className="absolute top-2 -left-3 w-3 h-5 bg-[#00d65f] clip-ribbon-left"></div>
              <div className="absolute top-2 -right-3 w-3 h-5 bg-[#00d65f] clip-ribbon-right"></div>
            </div>
            {/* Custom CSS for badge clips */}
            <style jsx>{`
              .clip-badge {
                clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
              }
              .clip-ribbon-left {
                clip-path: polygon(100% 0, 100% 100%, 0 50%);
              }
              .clip-ribbon-right {
                clip-path: polygon(0 0, 0 100%, 100% 50%);
              }
            `}</style>
          </div>
          
          <div className="text-center md:text-left flex flex-col items-center md:items-baseline gap-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight mb-2">
              La billetera virtual más descargada
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <a href="https://veratransfers.vercel.app" target="_blank" rel="noopener noreferrer" className="shrink-0 hover:opacity-90 transition-opacity">
                <img src="/images/veratransfers_logo.jpg" alt="VeraTransfers Logo" className="w-24 h-24 rounded-[20px] shadow-md border border-gray-100 object-cover" />
              </a>
              <div className="flex flex-col text-center md:text-left">
                <a href="https://veratransfers.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#00d65f] font-black text-4xl md:text-6xl tracking-tight leading-none hover:underline decoration-4 underline-offset-4">
                  VeraTransfers
                </a>
                <p className="text-gray-600 font-medium text-base md:text-lg mt-3 max-w-md leading-snug">
                  La plataforma oficial y segura de Avanza Financial. Recibe tus desembolsos de inmediato y administra tu dinero desde tu celular.
                </p>
                <div className="mt-5">
                  <Button asChild className="bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold px-8 py-6 md:py-3 rounded-[30px] text-base w-full md:w-auto shadow-md flex items-center justify-center gap-2">
                    <a href="https://veratransfers.vercel.app" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Es totalmente gratis, descárgala aquí
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Maneras Section */}
      <section className="bg-white py-8 w-full pb-16">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center">
          <h2 className="text-3xl md:text-2xl font-extrabold text-black mb-10 md:mb-8 text-center">
            3 maneras de aplicar a un préstamo
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 w-full max-w-2xl">
            
            {/* En persona */}
            <div className="flex flex-col items-center text-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="mb-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-base md:text-sm font-bold text-black mb-3">En persona</span>
              <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-8 md:px-6 py-6 md:py-2 rounded-[30px] md:rounded-[20px] text-base md:text-sm w-full md:w-auto min-w-[200px]">
                <Link href="/locations">Sucursales</Link>
              </Button>
            </div>

            {/* Por teléfono */}
            <div className="flex flex-col items-center text-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="mb-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-base md:text-sm font-bold text-black mb-3">Por WhatsApp</span>
              <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-8 md:px-6 py-6 md:py-2 rounded-[30px] md:rounded-[20px] text-base md:text-sm w-full md:w-auto min-w-[200px]">
                <Link href="https://wa.me/19295909116" target="_blank" rel="noopener noreferrer">
                  Contactar Asesor
                </Link>
              </Button>
            </div>

            {/* En línea */}
            <div className="flex flex-col items-center text-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="mb-1"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              <span className="text-base md:text-sm font-bold text-black mb-3">En línea</span>
              <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-8 md:px-6 py-6 md:py-2 rounded-[30px] md:rounded-[20px] text-base md:text-sm w-full md:w-auto min-w-[200px]">
                <Link href="/apply">Aplicar ahora</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Family Loans Section */}
      <section className="bg-white py-8 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
            
            {/* Left: Image */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img 
                src="/images/family.jpg" 
                alt="Familia cocinando feliz" 
                className="w-full h-auto object-cover rounded-[16px]"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2">
              <h2 className="text-3xl md:text-2xl font-extrabold text-black leading-tight mb-4 text-center md:text-left">
                Préstamos personales para todo tipo de metas
              </h2>
              
              <div className="flex flex-col gap-3 mb-5">
                {/* Bullet 1 */}
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                  <div>
                    <h3 className="text-base font-bold text-black mb-0.5">Desde $300 hasta $10,000</h3>
                    <p className="text-sm text-black leading-snug">No se requiere garantía para ayudarte a cubrir facturas, reparaciones, consolidación de deudas y más</p>
                  </div>
                </div>

                {/* Bullet 2 */}
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <div>
                    <h3 className="text-base font-bold text-black mb-0.5">Fondos rápidos</h3>
                    <p className="text-sm text-black leading-snug">Con depósito directo</p>
                  </div>
                </div>

                {/* Bullet 3 */}
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                  <div>
                    <h3 className="text-base font-bold text-black mb-0.5">Pagos accesibles</h3>
                    <p className="text-sm text-black leading-snug">Que se ajustan a tu presupuesto</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-3 mt-4">
                <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-6 py-6 md:py-1.5 rounded-[20px] text-base w-full md:w-auto">
                  <Link href="/apply">Aplicar ahora</Link>
                </Button>
                <Link href="/loans" className="text-base font-bold text-black underline hover:text-gray-600">
                  Más información
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="bg-white py-12 md:py-16 w-full">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          <div className="flex flex-col items-center text-center flex-1 gap-4">
             <div className="h-[60px] w-auto bg-black text-white flex items-center justify-center font-black text-xl rounded border border-gray-800 px-6 tracking-widest shadow-sm">BBB</div>
             <p className="text-xs font-bold text-black max-w-[120px] leading-tight">Calificación A+ del Better Business Bureau (BBB)</p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 gap-4">
             <div className="h-[60px] w-[60px] bg-black text-white flex flex-col items-center justify-center font-bold text-xs rounded-full relative shadow-sm">
               <span className="absolute -top-3 text-xl text-black">★★★</span>
               <span className="leading-tight">La<br/>app #1<br/>en ahorros</span>
             </div>
             <p className="text-xs font-bold text-black max-w-[120px] leading-tight">La app #1 en ahorros de 2025 para Bankrate</p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 gap-4">
             <div className="h-[60px] w-[60px] border-[3px] border-black rounded-full flex flex-col items-center justify-center font-black text-lg shadow-sm">CDFI</div>
             <p className="text-xs font-bold text-black max-w-[120px] leading-tight">Certificación CDFI del Departamento del Tesoro de los EE. UU.</p>
          </div>
        </div>
      </section>

      {/* Footer / Social Proof Section */}
      <section className="bg-black text-white py-8 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-6">
            Hemos hecho amigos en el camino
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <svg className="w-6 h-6 text-[#00d65f] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
              <p className="text-base font-bold mb-1">9 de cada 10 miembros</p>
              <Link href="/reviews" className="text-sm underline hover:text-gray-300">Ver más</Link>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <svg className="w-6 h-6 text-[#00d65f] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
              <p className="text-base font-bold mb-1">115,000 reseñas de 5 estrellas</p>
              <Link href="/reviews" className="text-sm underline hover:text-gray-300">Leer más</Link>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <svg className="w-6 h-6 text-[#00d65f] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M2 15h10"></path><path d="M9 18l3-3-3-3"></path></svg>
              <p className="text-base font-bold italic mb-1 px-1">«Todo el proceso fue extremadamente fácil.»</p>
              <p className="text-sm text-gray-400">Claudia M., de Google</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
