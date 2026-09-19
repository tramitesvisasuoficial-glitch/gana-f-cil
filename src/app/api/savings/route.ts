import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create a generic demo user for this draft application
    const user = await db.user.upsert({
      where: { email: data.email || 'demo_ahorros@avanzafinancial.com' },
      update: {
        name: `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Demo User',
        phone: data.phone || null,
      },
      create: {
        email: data.email || `demo_${Date.now()}@avanzafinancial.com`,
        name: `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Demo User',
        phone: data.phone || null,
      }
    });

    const application = await db.application.create({
      data: {
        userId: user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        state: data.state || "N/A",
        zipCode: data.zipCode || "00000",
        requestedAmount: data.goalAmount ? Number(data.goalAmount) : 0,
        loanPurpose: "Programa de Ahorros Set & Save",
        status: "reviewing", // Straight to reviewing for savings accounts
      }
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error("Error creating savings application:", error);
    return NextResponse.json({ success: false, error: "Failed to process savings application" }, { status: 500 });
  }
}
