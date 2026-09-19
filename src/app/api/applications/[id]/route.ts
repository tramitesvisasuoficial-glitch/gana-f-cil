import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const updateApplicationSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  housingStatus: z.string().optional(),
  housingCost: z.number().optional(),
  employmentStatus: z.string().optional(),
  employer: z.string().optional(),
  monthlyIncome: z.number().optional(),
  incomeFrequency: z.string().optional(),
  requestedAmount: z.number().optional(),
  termMonths: z.number().optional(),
  loanPurpose: z.string().optional(),
  bankStatus: z.string().optional(),
  creditProfile: z.string().optional(),
  residencyStatus: z.string().optional(),
  idType: z.string().optional(),
});

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await req.json();
    const validatedData = updateApplicationSchema.parse(data);

    // Parse date if present
    const dateOfBirth = validatedData.dateOfBirth ? new Date(validatedData.dateOfBirth) : undefined;

    const application = await db.application.update({
      where: { id },
      data: {
        ...validatedData,
        ...(dateOfBirth && { dateOfBirth }),
      }
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error("Error updating application:", error);
    return NextResponse.json({ success: false, error: "Failed to update application" }, { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const application = await db.application.findUnique({
      where: { id },
      include: { user: true }
    });

    if (!application) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, application });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch application" }, { status: 500 });
  }
}
