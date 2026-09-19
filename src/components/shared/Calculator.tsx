"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const amounts = [500, 1000, 2000, 3000, 5000, 7500, 10000];
const terms = [6, 12, 18, 24, 36];
const estimatedApr = 18.95; // Demo static APR

export function Calculator() {
  const [amount, setAmount] = useState<number>(3000);
  const [term, setTerm] = useState<number>(24);

  // Simple amortization formula
  const calculatePayment = (principal: number, months: number, apr: number) => {
    const monthlyRate = apr / 100 / 12;
    if (monthlyRate === 0) return principal / months;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  };

  const monthlyPayment = calculatePayment(amount, term, estimatedApr);

  return (
    <Card className="w-full shadow-lg border-primary/10">
      <CardContent className="p-6 md:p-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-8">
            {/* Amount Selection */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Loan Amount / Monto del préstamo
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {amounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAmount(a)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                      amount === a
                        ? "bg-primary text-primary-foreground font-medium"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    ${a.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-muted-foreground mr-2">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full max-w-[200px] border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  min="500"
                  max="50000"
                />
              </div>
            </div>

            {/* Term Selection */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Loan Term / Plazo
              </label>
              <div className="flex flex-wrap gap-2">
                {terms.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${
                      term === t
                        ? "bg-primary text-primary-foreground font-medium"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {t} months
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="md:col-span-2 bg-primary/5 rounded-xl p-6 flex flex-col justify-center border border-primary/10">
            <p className="text-sm text-center text-muted-foreground mb-2">Estimated monthly payment</p>
            <div className="text-4xl md:text-5xl font-bold text-center text-primary mb-2">
              ${monthlyPayment.toFixed(2)}
            </div>
            <p className="text-xs text-center text-muted-foreground mb-6">
              Demo estimate — not an actual loan offer.<br />
              Estimación de demostración — no es una oferta real.
            </p>
            
            <Button asChild size="lg" className="w-full shadow-md hover:shadow-lg transition-all">
              <Link href="/apply">
                Check Your Options <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
