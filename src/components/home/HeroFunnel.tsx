"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeroFunnel() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number | null>(null);
  const [isOtherAmount, setIsOtherAmount] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [500, 1000, 2500, 5000, 10000];
  const purposes = [
    "Personal",
    "Emergencia",
    "Negocio",
    "Hogar",
    "Deudas",
    "Otro"
  ];

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setIsOtherAmount(false);
  };

  const handleNext = () => {
    if (!amount && !isOtherAmount) return;
    if (isOtherAmount && !customAmount) return;
    setStep(2);
  };

  const handlePurposeSelect = (purpose: string) => {
    const finalAmount = isOtherAmount ? customAmount : amount;
    router.push(`/apply?amount=${finalAmount}&purpose=${encodeURIComponent(purpose)}`);
  };

  return (
    <div className="bg-white border-[3px] border-black rounded-[24px] p-6 md:p-8 w-full max-w-lg mx-auto shadow-[8px_8px_0px_0px_rgba(0,214,95,1)]">
      {step === 1 ? (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black text-center tracking-tight">
            ¿Cuánto dinero necesitas?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => handleAmountSelect(amt)}
                className={`px-4 py-2 rounded-full font-bold text-lg border-2 transition-all ${
                  amount === amt && !isOtherAmount
                    ? "bg-[#00d65f] border-[#00d65f] text-black"
                    : "bg-white border-gray-200 text-black hover:border-black hover:bg-gray-50"
                }`}
              >
                ${amt.toLocaleString()}
              </button>
            ))}
            <button
              onClick={() => { setIsOtherAmount(true); setAmount(null); }}
              className={`px-4 py-2 rounded-full font-bold text-lg border-2 transition-all ${
                isOtherAmount
                  ? "bg-[#00d65f] border-[#00d65f] text-black"
                  : "bg-white border-gray-200 text-black hover:border-black hover:bg-gray-50"
              }`}
            >
              Otro monto
            </button>
          </div>

          {isOtherAmount && (
            <div className="flex flex-col gap-2 mt-2 animate-in slide-in-from-top-2 duration-300">
              <label className="text-sm font-bold text-black px-2">Ingresa el monto</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500 text-lg">$</span>
                <input 
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Ej. 1500"
                  className="w-full pl-8 pr-4 py-3 rounded-[12px] border-2 border-gray-200 focus:border-[#00d65f] focus:outline-none text-lg font-bold"
                />
              </div>
            </div>
          )}

          <Button 
            onClick={handleNext}
            disabled={(!amount && !isOtherAmount) || (isOtherAmount && !customAmount)}
            className="w-full bg-black text-white hover:bg-black/90 h-14 rounded-full font-bold text-lg mt-4 shadow-sm"
          >
            Consultar mis opciones &rarr;
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 animate-in slide-in-from-right-8 duration-500">
          <div className="flex items-center gap-3">
            <button onClick={() => setStep(1)} className="text-gray-400 hover:text-black transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span className="text-sm font-bold text-[#00d65f] uppercase tracking-wider">Paso 2</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight leading-tight">
            ¿Para qué necesitas el dinero?
          </h2>
          
          <div className="flex flex-col gap-3">
            {purposes.map((purpose) => (
              <button
                key={purpose}
                onClick={() => handlePurposeSelect(purpose)}
                className="w-full text-left px-6 py-4 rounded-[16px] font-bold text-lg border-2 border-gray-100 hover:border-[#00d65f] hover:bg-[#00d65f]/5 transition-all flex items-center justify-between group bg-white shadow-sm"
              >
                <span>{purpose}</span>
                <span className="text-gray-300 group-hover:text-[#00d65f] transition-colors">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
