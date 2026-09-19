"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function Navbar() {
  const [lang, setLang] = useState("English");

  const toggleLanguage = () => {
    setLang(lang === "English" ? "Español" : "English");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-[60px] items-center justify-between px-2 w-full">
        {/* Left Section: Logo & Nav items */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="flex items-center gap-0.5 shrink-0 mr-2">
            <div className="flex h-[12px] w-[12px] items-center justify-center rounded-full border-[1.5px] border-black shrink-0">
              <div className="h-[3px] w-[3px] rounded-full bg-black shrink-0" />
            </div>
            <span className="text-base font-bold tracking-tight text-black mt-0.5 shrink-0">
              Avanza Financial
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="group relative cursor-pointer py-4">
              <span className="text-xs font-bold text-black flex items-center gap-0.5 whitespace-nowrap">
                Préstamos
                <svg width="5" height="5" viewBox="0 0 12 12" fill="none" className="mt-0.5 group-hover:rotate-180 transition-transform"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {/* Dropdown Préstamos */}
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white border border-gray-200 shadow-lg rounded-md w-36 z-50 overflow-hidden">
                <Link href="/apply" className="px-4 py-2.5 text-sm font-bold text-black hover:bg-gray-50 transition-colors">Préstamos Personales</Link>
                <Link href="/apply" className="px-4 py-2.5 text-sm font-bold text-black hover:bg-gray-50 transition-colors border-t border-gray-100">Préstamos con Garantía</Link>
              </div>
            </div>
            
            <div className="group relative cursor-pointer py-4">
              <span className="text-xs font-bold text-black flex items-center gap-0.5 whitespace-nowrap">
                Ahorros
                <svg width="5" height="5" viewBox="0 0 12 12" fill="none" className="mt-0.5 group-hover:rotate-180 transition-transform"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {/* Dropdown Ahorros */}
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white border border-gray-200 shadow-lg rounded-md w-40 z-50 overflow-hidden">
                <Link href="/savings" className="px-4 py-2.5 text-sm font-bold text-black hover:bg-gray-50 transition-colors">Conocer Plan Set & Save</Link>
                <Link href="/apply-savings" className="px-4 py-2.5 text-sm font-bold text-black hover:bg-gray-50 transition-colors border-t border-gray-100">Abrir cuenta de ahorros</Link>
              </div>
            </div>
            
            <Link href="/locations" className="text-xs font-bold text-black py-4 whitespace-nowrap hover:underline">
              Sucursales
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 shrink-0 pl-2">
          <Link href="/login" className="hidden md:flex text-xs font-bold text-black items-center gap-0.5 hover:underline whitespace-nowrap">
            Iniciar sesión
            <svg width="5" height="5" viewBox="0 0 12 12" fill="none" className="mt-0.5"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-3 py-1 rounded-[10px] text-xs h-6 whitespace-nowrap md:ml-2">
            <Link href="/apply">Aplicar</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
