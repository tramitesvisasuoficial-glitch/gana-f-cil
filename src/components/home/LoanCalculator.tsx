"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoanCalculator() {
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState(5000);

  // Dummy calculation: 35% APR over 24 months, bi-weekly
  const calculatePayment = (principal: number) => {
    const rate = 0.35 / 26; // bi-weekly rate
    const periods = 24 * 2; // 48 bi-weekly periods in 2 years
    const payment = (principal * rate) / (1 - Math.pow(1 + rate, -periods));
    return payment.toFixed(2);
  };

  return (
    <div className="border border-gray-300 rounded-[12px] p-6 w-full flex flex-col gap-4 shadow-sm bg-white">
      <h2 className="text-[14px] font-extrabold text-black">
        Calculadora de préstamo
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 transition-all duration-300">
        
        {/* Left Side: Location & Slider */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[8px] font-bold text-black">¿Cómo serían los pagos de tu préstamo?</label>
            <div className="relative">
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none border border-gray-200 rounded-[6px] py-2 pl-2 pr-6 text-[8px] text-black bg-white focus:outline-none focus:border-[#00d65f] focus:ring-1 focus:ring-[#00d65f] transition-colors cursor-pointer"
              >
                <option value="">¿Dónde vives?</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="IL">Illinois</option>
                <option value="NV">Nevada</option>
                <option value="NJ">New Jersey</option>
                <option value="AZ">Arizona</option>
                <option value="UT">Utah</option>
              </select>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00d65f" strokeWidth="2.5" className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          {location && (
            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex justify-between items-end">
                <label className="text-[8px] font-bold text-black">Monto deseado</label>
                <span className="text-[10px] font-extrabold text-[#00d65f]">${amount.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="300" 
                max="10000" 
                step="100" 
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00d65f]"
              />
              <div className="flex justify-between text-[7px] text-gray-400">
                <span>$300</span>
                <span>$10,000</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Results */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
          {!location ? (
            <div className="flex flex-col gap-1">
              <label className="text-[8px] text-gray-500">Monto del préstamo</label>
              <div className="border-b border-black pb-1">
                <span className="text-[24px] font-extrabold text-gray-300 tracking-tight">$10,000</span>
              </div>
              <p className="text-[7px] text-gray-400 mt-2">Selecciona tu estado para ver las opciones disponibles.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="flex flex-col gap-1">
                <label className="text-[8px] text-gray-500">Pago quincenal estimado</label>
                <div className="border-b border-[#00d65f] pb-1 flex items-end gap-1">
                  <span className="text-[24px] font-extrabold text-black tracking-tight">${calculatePayment(amount)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[6.5px] text-gray-500 leading-tight w-2/3">
                  *Cálculo referencial basado en término de 24 meses. El pago real y APR variará según historial de crédito.
                </p>
                <Button asChild className="bg-black text-white hover:bg-black/90 font-bold px-4 py-1.5 rounded-[20px] text-[8px] shrink-0">
                  <Link href="/apply">Aplicar ahora</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
