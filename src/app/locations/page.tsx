"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Navigation, Clock, Zap } from "lucide-react";
import Link from "next/link";

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando sucursales cerca de:", searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Section */}
      <section className="bg-[#1D2129] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#00d65f]/20 text-[#00d65f] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            El 95% de nuestros clientes aplican en línea en 5 minutos
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Nuestras Sucursales
          </h1>
          <p className="text-lg md:text-xl text-[#aeb9c3] mb-10 max-w-2xl mx-auto">
            Contamos con ubicaciones físicas para brindarte confianza y respaldo, pero <strong className="text-white">te recomendamos aplicar en línea</strong> para evitar tiempos de espera y recibir tu dinero más rápido.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                <Search className="h-5 w-5" />
              </div>
              <Input 
                type="text" 
                placeholder="Ciudad, estado o código postal" 
                className="pl-12 h-14 text-lg w-full bg-white text-foreground rounded-full border-none focus-visible:ring-4 focus-visible:ring-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="h-14 px-8 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg">
              Buscar
            </Button>
          </form>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-primary hover:text-white transition-colors cursor-pointer">
              <Navigation className="h-4 w-4" />
              <span className="font-semibold underline">Usar mi ubicación actual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Map and List */}
      <section className="flex-1 bg-background flex flex-col md:flex-row border-t h-[600px]">
        
        {/* Left Side: Locations List */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r overflow-y-auto max-h-[800px]">
          <div className="p-6 border-b bg-muted/20">
            <h2 className="font-bold text-xl text-foreground">Sucursales Destacadas</h2>
            <p className="text-sm text-muted-foreground mt-1">Mostrando sucursales cercanas</p>
          </div>
          
          <div className="divide-y">
            {/* Location 1 */}
            <div className="p-6 hover:bg-muted/10 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-foreground">Los Angeles - Main St</h3>
              <div className="flex items-start gap-2 text-muted-foreground mb-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm">
                  1234 S Main Street<br />
                  Los Angeles, CA 90015
                </p>
              </div>
              <div className="bg-red-50 text-red-700 text-xs font-semibold p-2 rounded-md flex items-center gap-2 mb-4 border border-red-100">
                <Clock className="w-4 h-4 shrink-0" />
                Tiempo de espera estimado: 45 min
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="w-full rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" asChild>
                  <Link href="/apply">Evitar fila y Aplicar en Línea</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full rounded-full text-xs" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Ver indicaciones</a>
                </Button>
              </div>
            </div>

            {/* Location 2 */}
            <div className="p-6 hover:bg-muted/10 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-foreground">Huntington Park</h3>
              <div className="flex items-start gap-2 text-muted-foreground mb-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm">
                  5678 Pacific Blvd<br />
                  Huntington Park, CA 90255
                </p>
              </div>
              <div className="bg-red-50 text-red-700 text-xs font-semibold p-2 rounded-md flex items-center gap-2 mb-4 border border-red-100">
                <Clock className="w-4 h-4 shrink-0" />
                Tiempo de espera estimado: 60 min
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="w-full rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" asChild>
                  <Link href="/apply">Evitar fila y Aplicar en Línea</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full rounded-full text-xs" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Ver indicaciones</a>
                </Button>
              </div>
            </div>

            {/* Location 3 */}
            <div className="p-6 hover:bg-muted/10 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-foreground">Houston - Gulf Freeway</h3>
              <div className="flex items-start gap-2 text-muted-foreground mb-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <p className="text-sm">
                  9101 Gulf Freeway<br />
                  Houston, TX 77017
                </p>
              </div>
              <div className="bg-yellow-50 text-yellow-700 text-xs font-semibold p-2 rounded-md flex items-center gap-2 mb-4 border border-yellow-100">
                <Clock className="w-4 h-4 shrink-0" />
                Atención presencial limitada hoy
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="w-full rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" asChild>
                  <Link href="/apply">Aplicar en Línea Ahora</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full rounded-full text-xs" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Ver indicaciones</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Real Interactive Map */}
        <div className="w-full md:w-2/3 lg:w-3/4 h-[400px] md:h-full relative bg-[#e5e3df]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.6919192!3d34.0201613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>

      </section>

      {/* Additional CTA */}
      <section className="bg-black py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Para qué hacer filas si puedes hacerlo desde casa?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Recibe tu aprobación más rápido, sin papeleos físicos y sin perder tu valioso tiempo. El proceso en línea es seguro y toma menos de 5 minutos.
          </p>
          <Button asChild size="lg" className="rounded-full font-bold px-10 h-14 text-lg bg-[#00d65f] hover:bg-[#00d65f]/90 text-black">
            <Link href="/apply">Comenzar mi solicitud en línea</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
