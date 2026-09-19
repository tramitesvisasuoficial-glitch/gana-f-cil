import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, CheckCircle2, Clock } from "lucide-react";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const applications = await db.application.findMany({
    orderBy: { createdAt: "desc" },
  });
  
  const totalUsers = await db.user.count();

  const totalApplications = applications.length;
  const approvedLoans = applications.filter(a => a.status === 'approved').length;
  const pendingReview = applications.filter(a => a.status === 'reviewing' || a.status === 'review_required').length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Bienvenido al panel de administración de Avanza Financial.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Solicitudes</CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalApplications}</div>
            <p className="text-xs text-muted-foreground mt-1">Registradas en el sistema</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Préstamos Aprobados</CardTitle>
            <CheckCircle2 className="w-4 h-4 text-avanza-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-avanza-success">{approvedLoans}</div>
            <p className="text-xs text-muted-foreground mt-1">Listos para fondeo</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pendientes de Revisión</CardTitle>
            <Clock className="w-4 h-4 text-avanza-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-avanza-warning">{pendingReview}</div>
            <p className="text-xs text-muted-foreground mt-1">Requieren revisión manual</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Usuarios Registrados</CardTitle>
            <Users className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">Cuentas creadas</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Solicitudes Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          {applications.length === 0 ? (
            <div className="h-40 flex items-center justify-center text-muted-foreground">
              No hay solicitudes registradas aún. Los datos se actualizarán cuando los clientes envíen solicitudes.
            </div>
          ) : (
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nombre</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Estado (USA)</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Monto</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Fecha</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Estatus</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">
                        {app.firstName || "Sin nombre"} {app.lastName || ""}
                      </td>
                      <td className="p-4 align-middle">{app.state || "N/A"}</td>
                      <td className="p-4 align-middle">
                        ${app.requestedAmount ? Number(app.requestedAmount).toLocaleString() : "0"}
                      </td>
                      <td className="p-4 align-middle">{new Date(app.createdAt).toLocaleDateString()}</td>
                      <td className="p-4 align-middle">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                          ${app.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                          ${app.status === 'reviewing' || app.status === 'review_required' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${app.status === 'offer_ready' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}
                        `}>
                          {app.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
