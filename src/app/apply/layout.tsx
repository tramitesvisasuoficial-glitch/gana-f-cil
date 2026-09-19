import { ProgressIndicator } from "@/components/apply/ProgressIndicator";

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* We keep the global navbar for now, or we can use a simplified one for distraction-free flow */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <ProgressIndicator />
        <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-sm border p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
