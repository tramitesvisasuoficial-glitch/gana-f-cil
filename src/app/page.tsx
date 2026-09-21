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
                <div className="flex flex-col gap-1 text-center md:text-left mt-2">
                  <p className="font-bold text-black text-base">
                    Precalifica en minutos sin afectar tu puntaje de crédito.
                  </p>
                  <Link href="/terms" className="text-sm text-gray-500 underline decoration-gray-400 underline-offset-4">
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

      {/* Two Main Cards */}
      <section className="pb-4 pt-1 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            
            <div className="border border-gray-300 rounded-[10px] py-4 md:py-1.5 px-4 md:px-2 flex flex-col items-center justify-center text-center w-full md:w-1/2">
              <div className="mb-2 md:mb-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-black mb-0.5">Préstamos</h2>
              <p className="text-base text-black mb-1">Para cubrir facturas, reparaciones, depósitos y más</p>
              <Link href="/loans" className="font-bold underline text-black text-base">
                Más información
              </Link>
            </div>

            <div className="border border-gray-300 rounded-[10px] py-4 md:py-1.5 px-4 md:px-2 flex flex-col items-center justify-center text-center w-full md:w-1/2">
              <div className="mb-2 md:mb-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-black mb-0.5">Ahorros</h2>
              <p className="text-base text-black mb-1">Alcanza tus metas con Set & Save™</p>
              <Link href="/savings" className="font-bold underline text-black text-base">
                Más información
              </Link>
            </div>

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

      {/* Extra Large Loan Section (Added as requested) */}
      <section className="bg-[#f9fafb] py-8 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-2xl font-extrabold text-black leading-tight mb-8 md:mb-4 max-w-sm mx-auto md:mx-0 text-center md:text-left">
            Y qué tal si necesitas un préstamo mayor
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-6">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-3 order-2 md:order-1">
              {/* Bullet 1 */}
              <div className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><path d="M12 5v14M5 12h14"/></svg>
                <div>
                  <h3 className="text-base font-bold text-black mb-0.5">De $2,525 a $18,500</h3>
                  <p className="text-sm text-black leading-snug pr-4">Usa el título de tu auto para obtener un préstamo más grande y mejores términos para alcanzar tus metas más grandes</p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><path d="M16 8l-4 8-4-8"/></svg>
                <div>
                  <h3 className="text-base font-bold text-black mb-0.5">Tasas de interés APR más bajas</h3>
                  <p className="text-sm text-black leading-snug pr-4">Al usar el título de tu auto que sin hacerlo</p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <div>
                  <h3 className="text-base font-bold text-black mb-0.5">Sigue adelante</h3>
                  <p className="text-sm text-black leading-snug pr-4">Todo lo demás del préstamo es igual: rápido, accesible, y te ayuda a mejorar tu crédito al hacer pagos regulares a tiempo</p>
                </div>
              </div>

              <div className="mt-4 md:mt-2">
                <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-6 py-6 md:py-1.5 rounded-[20px] text-base w-full md:w-auto">
                  <Link href="/loans#title-loans">Más información</Link>
                </Button>
              </div>

              <p className="text-xs text-gray-500 leading-tight mt-6 max-w-full md:max-w-[280px] text-center md:text-left">
                Disponible en Arizona, California, Florida, Illinois, Nevada, New Jersey, Texas, y Utah
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img 
                src="/images/car_family.jpg" 
                alt="Familia sonriendo dentro de un auto" 
                className="w-full h-auto object-cover rounded-[16px] shadow-sm"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Calculadora Section Removed */}

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
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
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

      {/* Set & Save Section */}
      <section className="bg-[#fcfaf9] py-12 md:py-16 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight max-w-sm mx-auto md:mx-0">
              Set & Save™ te ayuda a ahorrar sin pensarlo
            </h2>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="mt-0.5 shrink-0 mx-auto md:mx-0"><path d="M12 5v14M5 12h14"/></svg>
                <div className="text-center md:text-left">
                  <h3 className="text-base font-bold text-black mb-1">Una forma más inteligente de ahorrar</h3>
                  <p className="text-sm text-gray-600 leading-snug pr-0 md:pr-4">Establece tus metas de ahorro y nos pondremos a trabajar para que las logres</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="mt-0.5 shrink-0 mx-auto md:mx-0"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                <div className="text-center md:text-left">
                  <h3 className="text-base font-bold text-black mb-1">Cantidades estratégicas, ahorradas de a pocos</h3>
                  <p className="text-sm text-gray-600 leading-snug pr-0 md:pr-4">Set & Save aprende tus hábitos de gastos y transfiere dinero inteligentemente a tu cuenta de ahorros</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="mt-0.5 shrink-0 mx-auto md:mx-0"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <div className="text-center md:text-left">
                  <h3 className="text-base font-bold text-black mb-1">En promedio, nuestros miembros ahorran más de $1,800 al año*</h3>
                  <p className="text-sm text-gray-600 leading-snug pr-0 md:pr-4">Suma más rápido de lo que imaginas</p>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-2">
              <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-6 py-6 md:py-2 rounded-[30px] md:rounded-[20px] text-base md:text-sm w-full md:w-auto">
                <Link href="/savings">Más información</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#ffe7e5] rounded-[24px] p-8 flex justify-center items-center shadow-sm order-1 md:order-2">
             <img src="/images/app_graphic.jpg" alt="App Set and Save" className="w-full max-w-[280px] mix-blend-multiply opacity-90" />
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

      {/* Blog Section */}
      <section className="bg-white pt-8 pb-12 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-10 tracking-tight">
            La guía de dinero de Avanza Financial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="overflow-hidden rounded-[16px] shadow-sm">
                <img src="/images/family.jpg" className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform duration-500" alt="Préstamos con garantía" />
              </div>
              <p className="text-sm text-gray-500 text-center leading-relaxed px-2 group-hover:text-black transition-colors">Préstamos con garantía: qué son y cómo usarlos</p>
            </div>
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="overflow-hidden rounded-[16px] shadow-sm">
                <img src="/images/blog2.jpg" className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform duration-500" alt="Amortizar un préstamo" />
              </div>
              <p className="text-sm text-gray-500 text-center leading-relaxed px-2 group-hover:text-black transition-colors">Cómo amortizar un préstamo: 7 maneras de pagar antes y ahorrar intereses</p>
            </div>
            <div className="flex flex-col gap-4 group cursor-pointer">
              <div className="overflow-hidden rounded-[16px] shadow-sm">
                <img src="/images/blog3.jpg" className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform duration-500" alt="Obtener aprobación" />
              </div>
              <p className="text-sm text-gray-500 text-center leading-relaxed px-2 group-hover:text-black transition-colors">Cómo obtener la aprobación para un préstamo</p>
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-2.5 items-center">
            <div className="h-2 w-8 bg-[#00d65f] rounded-full"></div>
            <div className="h-2 w-2 bg-gray-200 border border-black rounded-full"></div>
            <div className="h-2 w-2 bg-gray-200 border border-black rounded-full"></div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-8 md:px-6 py-6 md:py-2 rounded-full text-base md:text-sm w-full md:w-auto">
              <Link href="/blog">Ver educación financiera</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-8 items-center md:items-start">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-black mb-4 md:mb-2">Eso es todo</h2>
              <p className="text-base font-medium text-black mb-8 md:mb-6 max-w-md leading-snug mx-auto md:mx-0">
                ¿Todavía tienes preguntas? Aquí hay algunas que ya hemos respondido.
              </p>

              {/* Tabs */}
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-x-4 gap-y-3 mb-8 md:mb-6">
                <span className="text-sm font-bold text-black border-b border-black pb-0.5 cursor-pointer">Ahorros</span>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-black">Establecer crédito</span>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-black">Pagos</span>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-black">Préstamos personales</span>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-black">Préstamos personales con garantía</span>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-black">Privacidad y seguridad</span>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-black">Solicitudes</span>
              </div>

              {/* Accordion Items */}
              <div className="flex flex-col border-t border-gray-200">
                <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
                  <span className="text-sm font-bold text-black pr-4 group-hover:underline">¿Puedo recibir la precalificación sin impactar mi puntaje de crédito?</span>
                  <span className="text-[#00d65f] text-2xl font-light">+</span>
                </div>
                <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
                  <span className="text-sm font-bold text-black pr-4 group-hover:underline">¿Puede haber más de una persona que firme un préstamo personal?</span>
                  <span className="text-[#00d65f] text-2xl font-light">+</span>
                </div>
                <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
                  <span className="text-sm font-bold text-black pr-4 group-hover:underline">¿Qué documentación necesito para solicitar un préstamo personal?</span>
                  <span className="text-[#00d65f] text-2xl font-light">+</span>
                </div>
              </div>

              <div className="mt-8 md:mt-6">
                <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-8 md:px-6 py-6 md:py-2 rounded-[30px] md:rounded-[20px] text-base md:text-sm w-full md:w-auto">
                  <Link href="/terms">Leer más</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-[16px] overflow-hidden shadow-sm w-full h-[400px]">
                <img 
                  src="/images/family.jpg" 
                  alt="Dos chicas felices" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bankrate Section */}
      <section className="bg-[#fcfaf9] py-12 md:py-16 w-full border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
          <div className="relative">
            {/* Badge Graphic */}
            <div className="bg-black text-white px-5 py-5 rounded-t-none rounded-b-[20px] flex flex-col items-center justify-center relative clip-badge w-[80px]">
              <div className="flex gap-1 mb-1 absolute -top-3">
                <span className="text-black text-lg">★</span>
                <span className="text-black text-xl">★</span>
                <span className="text-black text-lg">★</span>
              </div>
              <span className="text-xl font-black leading-none mt-3">#1</span>
              <span className="text-xs font-bold leading-tight text-center mt-1">savings<br/>app</span>
              {/* Decorative ribbon tails */}
              <div className="absolute top-2 -left-3 w-3 h-5 bg-black clip-ribbon-left"></div>
              <div className="absolute top-2 -right-3 w-3 h-5 bg-black clip-ribbon-right"></div>
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
            <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">
              La app #1 en ahorros de 2025 según 
            </h2>
            <div className="flex items-center text-gray-500 font-bold text-5xl tracking-tight">
              Bankrate<span className="text-sm mb-4 ml-0.5 border border-gray-400 rounded-sm px-[1px] leading-none">↗</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
