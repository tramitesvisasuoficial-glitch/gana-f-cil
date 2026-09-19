"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="flex items-center gap-3 px-3 py-2 w-full rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-colors"
    >
      <LogOut className="w-5 h-5" />
      Cerrar Sesión
    </button>
  );
}
