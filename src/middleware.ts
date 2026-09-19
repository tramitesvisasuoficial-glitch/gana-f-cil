import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  // Si estamos en desarrollo local, podemos omitir la seguridad si lo deseamos,
  // pero lo mantendremos para probar que funciona.
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    // Decodificar Base64: "admin:avanza2026"
    const [user, pwd] = atob(authValue).split(':');

    if (user === 'avanza' && pwd === 'avanza20268925') {
      return NextResponse.next();
    }
  }
  
  url.pathname = '/api/auth';
  
  return new NextResponse('Autenticacion requerida', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Avanza Financial Demo"',
    },
  });
}

export const config = {
  // Proteger todas las rutas excepto las estáticas
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
