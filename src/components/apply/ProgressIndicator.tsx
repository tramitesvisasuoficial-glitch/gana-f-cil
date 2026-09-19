"use client";

import { usePathname } from "next/navigation";
import { Check } from "lucide-react";

const steps = [
  { id: "step-1", label: "Location", path: "/apply/step-1" },
  { id: "step-2", label: "Personal", path: "/apply/step-2" },
  { id: "step-3", label: "Housing", path: "/apply/step-3" },
  { id: "step-4", label: "Employment", path: "/apply/step-4" },
  { id: "step-5", label: "Financial", path: "/apply/step-5" },
  { id: "step-6", label: "Options", path: "/apply/step-6" },
  { id: "review", label: "Review", path: "/apply/review" },
];

export function ProgressIndicator() {
  const pathname = usePathname();
  
  // Find current step index based on path
  const currentStepIndex = steps.findIndex(step => pathname.includes(step.id));
  
  // If not in a step (e.g. processing or offer), we might not show it or show it fully complete
  if (currentStepIndex === -1) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted rounded-full z-0" />
        
        {/* Active line */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500"
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          const isPending = index > currentStepIndex;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center group">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors
                  ${isCompleted ? "bg-primary border-primary text-primary-foreground" : ""}
                  ${isActive ? "bg-background border-primary text-primary shadow-[0_0_0_4px_var(--primary-20)]" : ""}
                  ${isPending ? "bg-background border-muted-foreground/30 text-muted-foreground" : ""}
                `}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              
              {/* Optional: label tooltip or hidden on mobile */}
              <span className={`absolute -bottom-6 text-xs font-medium whitespace-nowrap hidden md:block
                ${isActive ? "text-primary" : "text-muted-foreground"}
              `}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
