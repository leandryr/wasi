export const runtime = 'nodejs'; // 👈 fuerza runtime clásico

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const RUTAS_PROTEGIDAS: Record<string, string> = {
  '/admin': 'admin',
  '/docente': 'docente',
  '/estudiante': 'estudiante',
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;

  if (!token) {
    for (const ruta in RUTAS_PROTEGIDAS) {
      if (path.startsWith(ruta)) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
    return NextResponse.next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { rol: string };

    for (const ruta in RUTAS_PROTEGIDAS) {
      if (path.startsWith(ruta) && decoded.rol !== RUTAS_PROTEGIDAS[ruta]) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/docente/:path*', '/estudiante/:path*'],
};
