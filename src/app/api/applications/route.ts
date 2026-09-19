import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const step1Schema = z.object({
  zipCode: z.string().min(5),
  state: z.string().min(2),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const validatedData = step1Schema.parse(data);

    // Create a generic demo user for this draft application
    const user = await db.user.upsert({
      where: { email: 'demo@avanzafinancial.com' },
      update: {},
      create: {
        email: 'demo@avanzafinancial.com',
        name: 'Demo User',
      }
    });

    const application = await db.application.create({
      data: {
        userId: user.id,
        zipCode: validatedData.zipCode,
        state: validatedData.state,
        status: "draft",
      }
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error("Error creating application draft:", error);
    return NextResponse.json({ success: false, error: "Failed to process application" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch all applications for the admin dashboard
    const applications = await db.application.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json({ applications });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch applications" }, { status: 500 });
  }
}
