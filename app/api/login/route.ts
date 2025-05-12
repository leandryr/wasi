import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Usuario from '@/models/Usuario';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();
  const user = await Usuario.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 401 });
  }

  const passwordCorrecta = await bcrypt.compare(password, user.password);
  if (!passwordCorrecta) {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user._id, rol: user.rol },
    process.env.JWT_SECRET!,
    { expiresIn: '1d' }
  );

  const response = NextResponse.json({ rol: user.rol });

  response.cookies.set('token', token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
