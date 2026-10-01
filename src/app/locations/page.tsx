"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Navigation, Clock, Zap } from "lucide-react";
import Link from "next/link";

const MOCK_LOCATIONS = [
  {
    id: 1,
    name: "Miami - Sede Principal",
    address: "801 Brickell Ave, Suite 900",
    city: "Miami",
    state: "FL",
    zip: "33131",
    hours: "L-V 9am - 5pm",
    status: "normal",
    statusText: "Horario: L-V 9am - 5pm",
    mapUrl: "https://maps.google.com/?q=801+Brickell+Ave,+Miami,+FL+33131",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.076867634289!2d-80.19253452458428!3d25.7679803773489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69b6a51d087%3A0xe543fa02dc70a271!2s801%20Brickell%20Ave%20%23900%2C%20Miami%2C%20FL%2033131%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
  },
  {
    id: 2,
    name: "Huntington Park",
    address: "5678 Pacific Blvd",
    city: "Huntington Park",
    state: "CA",
    zip: "90255",
    hours: "L-V 10am - 6pm",
    status: "busy",
    statusText: "Tiempo de espera estimado: 60 min",
    mapUrl: "https://maps.google.com/?q=5678+Pacific+Blvd,+Huntington+Park,+CA+90255",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2741913745265!2d-118.22383042360216!3d33.98547372051662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cbfb8830ba25%3A0xeab50d32b55f0a04!2s5678%20Pacific%20Blvd%2C%20Huntington%20Park%2C%20CA%2090255%2C%20USA!5e0!3m2!1sen!2s!4v1714571987515!5m2!1sen!2s"
  },
  {
    id: 3,
    name: "Houston - Gulf Freeway",
    address: "9101 Gulf Freeway",
    city: "Houston",
    state: "TX",
    zip: "77017",
    hours: "L-V 9am - 4pm",
    status: "limited",
    statusText: "Atención presencial limitada hoy",
    mapUrl: "https://maps.google.com/?q=9101+Gulf+Freeway,+Houston,+TX+77017",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.45607993081!2d-95.25367352377317!3d29.648358437943543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640964c0dbf88c5%3A0xc3435c249bcaf666!2s9101%20Gulf%20Fwy%2C%20Houston%2C%20TX%2077017%2C%20USA!5e0!3m2!1sen!2s!4v1714572074362!5m2!1sen!2s"
  },
  {
    id: 4,
    name: "Orlando - Semoran Blvd",
    address: "2000 S Semoran Blvd",
    city: "Orlando",
    state: "FL",
    zip: "32822",
    hours: "L-V 9am - 5pm",
    status: "normal",
    statusText: "Horario: L-V 9am - 5pm",
    mapUrl: "https://maps.google.com/?q=2000+S+Semoran+Blvd,+Orlando,+FL+32822",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.183707767098!2d-81.3093291238053!3d28.504107190013534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7666e0d9b4b09%3A0x868b42be26eddfbd!2s2000%20S%20Semoran%20Blvd%2C%20Orlando%2C%20FL%2032822%2C%20USA!5e0!3m2!1sen!2s!4v1714572183204!5m2!1sen!2s"
  },
  {
    id: 5,
    name: "Los Angeles - Downtown",
    address: "1000 S Broadway",
    city: "Los Angeles",
    state: "CA",
    zip: "90015",
    hours: "L-V 9am - 5pm",
    status: "busy",
    statusText: "Fila de espera estimada: 45 min",
    mapUrl: "https://maps.google.com/?q=1000+S+Broadway,+Los+Angeles,+CA+90015",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.19520970222!2d-118.26189912360216!3d34.038827718420364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c975a5eef5%3A0xc34cc5a702951475!2s1000%20S%20Broadway%2C%20Los%20Angeles%2C%20CA%2090015%2C%20USA!5e0!3m2!1sen!2s!4v1714572236315!5m2!1sen!2s"
  }
];

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(MOCK_LOCATIONS[0]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveQuery(searchQuery.trim().toLowerCase());
  };

  const filteredLocations = useMemo(() => {
    if (!activeQuery) return MOCK_LOCATIONS;
    return MOCK_LOCATIONS.filter(loc => 
      loc.city.toLowerCase().includes(activeQuery) ||
      loc.state.toLowerCase().includes(activeQuery) ||
      loc.zip.includes(activeQuery) ||
      loc.name.toLowerCase().includes(activeQuery)
    );
  }, [activeQuery]);

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
                placeholder="Ciudad, estado o código postal (ej. Miami, CA, 33131)" 
                className="pl-12 h-14 text-lg w-full bg-white text-foreground rounded-full border-none focus-visible:ring-4 focus-visible:ring-primary/30"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value === "") setActiveQuery("");
                }}
              />
            </div>
            <Button type="submit" className="h-14 px-8 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg">
              Buscar
            </Button>
          </form>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-primary hover:text-white transition-colors cursor-pointer" onClick={() => { setSearchQuery(""); setActiveQuery(""); }}>
              <Navigation className="h-4 w-4" />
              <span className="font-semibold underline">Ver todas las sucursales</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Map and List */}
      <section className="flex-1 bg-background flex flex-col md:flex-row border-t h-[600px]">
        
        {/* Left Side: Locations List */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r overflow-y-auto max-h-[800px]">
          <div className="p-6 border-b bg-muted/20">
            <h2 className="font-bold text-xl text-foreground">Sucursales Encontradas</h2>
            <p className="text-sm text-muted-foreground mt-1">Mostrando {filteredLocations.length} resultados</p>
          </div>
          
          <div className="divide-y">
            {filteredLocations.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <MapPin className="h-10 w-10 mx-auto mb-4 opacity-20" />
                <p>No encontramos sucursales en esa ubicación.</p>
                <Button variant="link" onClick={() => {setSearchQuery(""); setActiveQuery("");}} className="mt-2">
                  Ver todas
                </Button>
              </div>
            ) : (
              filteredLocations.map((loc) => (
                <div 
                  key={loc.id} 
                  className={`p-6 transition-colors cursor-pointer ${selectedLocation.id === loc.id ? 'bg-primary/5 border-l-4 border-l-primary' : 'hover:bg-muted/10 border-l-4 border-l-transparent'}`}
                  onClick={() => setSelectedLocation(loc)}
                >
                  <h3 className="font-bold text-lg mb-2 text-foreground">{loc.name}</h3>
                  <div className="flex items-start gap-2 text-muted-foreground mb-3">
                    <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                    <p className="text-sm">
                      {loc.address}<br />
                      {loc.city}, {loc.state} {loc.zip}
                    </p>
                  </div>
                  
                  {loc.status === 'normal' && (
                    <div className="bg-[#00d65f]/10 text-[#00d65f] text-xs font-semibold p-2 rounded-md flex items-center gap-2 mb-4 border border-[#00d65f]/20">
                      <Clock className="w-4 h-4 shrink-0" />
                      {loc.statusText}
                    </div>
                  )}
                  {loc.status === 'busy' && (
                    <div className="bg-red-50 text-red-700 text-xs font-semibold p-2 rounded-md flex items-center gap-2 mb-4 border border-red-100">
                      <Clock className="w-4 h-4 shrink-0" />
                      {loc.statusText}
                    </div>
                  )}
                  {loc.status === 'limited' && (
                    <div className="bg-yellow-50 text-yellow-700 text-xs font-semibold p-2 rounded-md flex items-center gap-2 mb-4 border border-yellow-100">
                      <Clock className="w-4 h-4 shrink-0" />
                      {loc.statusText}
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <Button size="sm" className="w-full rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" asChild>
                      <Link href="/apply">Evitar fila y Aplicar en Línea</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full rounded-full text-xs" asChild>
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">Ver indicaciones en mapa</a>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side: Real Interactive Map */}
        <div className="w-full md:w-2/3 lg:w-3/4 h-[400px] md:h-full relative bg-[#e5e3df]">
          {selectedLocation ? (
            <iframe 
              src={selectedLocation.embed}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-opacity duration-500"
              key={selectedLocation.id} // forces iframe refresh
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-slate-100">
              Selecciona una sucursal para verla en el mapa
            </div>
          )}
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
