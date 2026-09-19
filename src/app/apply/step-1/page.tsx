"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function Step1Location() {
  const router = useRouter();
  const setApplicationId = useApplicationStore((state) => state.setApplicationId);
  const [isLoading, setIsLoading] = useState(false);
  
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isValidatingZip, setIsValidatingZip] = useState(false);
  const [zipError, setZipError] = useState("");

  useEffect(() => {
    if (zipCode.length === 5) {
      setIsValidatingZip(true);
      setZipError("");
      fetch(`https://api.zippopotam.us/us/${zipCode}`)
        .then(res => {
          if (!res.ok) throw new Error("Not found");
          return res.json();
        })
        .then(data => {
          if (data.places && data.places.length > 0) {
            const place = data.places[0];
            const stateAbbr = place["state abbreviation"];
            const cityName = place["place name"];
            setState(stateAbbr);
            setCity(cityName);
          }
        })
        .catch(err => {
          console.error("Error fetching zip code", err);
          setZipError("Código postal no encontrado");
          setCity("");
        })
        .finally(() => {
          setIsValidatingZip(false);
        });
    } else {
      setCity("");
      setZipError("");
    }
  }, [zipCode]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Enviar también la ciudad si queremos, aunque el schema actual solo pide zipCode y state
        body: JSON.stringify({ zipCode, state }),
      });

      const data = await response.json();
      
      if (data.success && data.application?.id) {
        setApplicationId(data.application.id);
        router.push("/apply/step-2");
      } else {
        alert("Error creating application draft");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Comencemos con tu ubicación
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Esto nos ayuda a mostrarte las opciones correctas para tu estado.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-2">
          <Label htmlFor="zipCode" className="text-base">Código Postal *</Label>
          <Input 
            id="zipCode" 
            placeholder="ej. 90001" 
            required 
            className="h-12 text-lg"
            value={zipCode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 5);
              setZipCode(val);
            }}
          />
          {isValidatingZip && <p className="text-sm text-blue-500 animate-pulse">Buscando ubicación...</p>}
          {city && <p className="text-sm text-[#00d65f] font-bold">📍 {city}, {state}</p>}
          {zipError && <p className="text-sm text-red-500 font-medium">{zipError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state" className="text-base">Estado *</Label>
          <Input
            id="state"
            required
            className="h-12 text-lg uppercase"
            placeholder="ej. CA"
            maxLength={2}
            value={state}
            onChange={(e) => setState(e.target.value.toUpperCase())}
          />
        </div>

        <Button type="submit" size="lg" className="w-full h-14 text-lg mt-8 rounded-full bg-[#00d65f] text-black hover:bg-[#00d65f]/90 font-bold" disabled={isLoading || isValidatingZip}>
          {isLoading ? "Cargando..." : "Continuar"}
        </Button>
      </form>
    </div>
  );
}
