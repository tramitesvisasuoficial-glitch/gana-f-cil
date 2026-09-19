"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <section className="bg-[#1D2129] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Centro de Atención y Reclamos</h1>
          <p className="text-lg md:text-xl text-[#aeb9c3]">
            Tu voz es importante para nosotros. Estamos aquí para escucharte y resolver cualquier inconveniente.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-5xl -mt-8 relative z-10 flex flex-col md:flex-row gap-8">
        
        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex-1">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-[#00d65f] mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Mensaje Recibido</h2>
              <p className="text-gray-600">
                Gracias por comunicarte con Avanza Financial. Hemos recibido tu mensaje y un agente especializado se pondrá en contacto contigo en menos de 24 horas hábiles.
              </p>
              <Button className="mt-8 bg-black text-white hover:bg-black/90 font-bold" onClick={() => setSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Envíanos tu caso</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de solicitud</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el motivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="queja">Queja o Inconformidad</SelectItem>
                      <SelectItem value="reclamo">Reclamo (Transacción / Cobro)</SelectItem>
                      <SelectItem value="duda">Duda o Consulta</SelectItem>
                      <SelectItem value="sugerencia">Sugerencia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono (opcional)</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Detalles del caso</Label>
                  <Textarea id="message" required rows={5} placeholder="Por favor, explica tu situación con el mayor detalle posible..." />
                </div>

                <Button type="submit" className="w-full bg-[#00d65f] text-black font-bold hover:bg-[#00d65f]/90 h-12 text-lg">
                  Enviar Mensaje
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Contact Info Sidebar */}
        <div className="flex-1 md:max-w-xs flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Contacto Directo</h3>
            
            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 text-[#00d65f] mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Línea Nacional</p>
                <p className="text-gray-600 text-sm">(555) 123-4567</p>
                <p className="text-xs text-gray-400 mt-1">Lunes a Viernes: 8am - 8pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#00d65f] mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Correo Electrónico</p>
                <p className="text-gray-600 text-sm">soporte@avanzafinancial.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00d65f] mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Oficina Principal</p>
                <p className="text-gray-600 text-sm">123 Financial Way, Suite 400<br/>Miami, FL 33131</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">Nuestro Compromiso</h3>
            <p className="text-sm text-blue-800">
              En Avanza Financial nos tomamos muy en serio cada reporte. Todo reclamo formal recibe un número de seguimiento y es respondido en un plazo máximo de 48 horas hábiles por nuestro departamento de calidad.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
