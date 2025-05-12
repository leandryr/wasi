import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Sesión cerrada correctamente' });

  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0, // Expira la cookie
  });

  return response;
}
