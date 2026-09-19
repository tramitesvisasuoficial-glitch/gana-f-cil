import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const application = await db.application.findUnique({
      where: { id },
    });

    if (!application) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    }

    if (application.status !== "draft") {
      return NextResponse.json({ success: false, error: "Application already submitted" }, { status: 400 });
    }

    // Dummy logic for generating offers based on requested amount
    const requestedAmount = application.requestedAmount ? Number(application.requestedAmount) : 3000;
    
    // Generate 3 mock offers (12, 24, 36 months)
    const apr = 18.95; // Demo APR
    const monthlyInterestRate = (apr / 100) / 12;
    
    const calculatePayment = (principal: number, months: number) => {
      const payment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);
      return Math.round(payment * 100) / 100;
    };

    const updatedApplication = await db.application.update({
      where: { id },
      data: {
        status: "reviewing",
        demoOfferAmount: requestedAmount,
        demoTerm: 24,
        demoApr: apr,
        demoMonthlyPayment: calculatePayment(requestedAmount, 24),
      }
    });

    return NextResponse.json({ 
      success: true, 
      application: updatedApplication,
      offers: [
        {
          term: 12,
          monthlyPayment: calculatePayment(requestedAmount, 12),
          apr,
          totalAmount: requestedAmount
        },
        {
          term: 24,
          monthlyPayment: calculatePayment(requestedAmount, 24),
          apr,
          totalAmount: requestedAmount
        },
        {
          term: 36,
          monthlyPayment: calculatePayment(requestedAmount, 36),
          apr,
          totalAmount: requestedAmount
        }
      ]
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ success: false, error: "Failed to submit application" }, { status: 500 });
  }
}
