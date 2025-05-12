import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Usuario from '@/models/Usuario';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await connectDB();
  const { nombre, email, password, rol } = await req.json();

  if (!nombre || !email || !password || !rol) {
    return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
  }

  const existe = await Usuario.findOne({ email });
  if (existe) {
    return NextResponse.json({ error: 'El usuario ya existe' }, { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const nuevoUsuario = new Usuario({ nombre, email, password: hashed, rol });

  await nuevoUsuario.save();

  return NextResponse.json({ message: 'Usuario creado exitosamente', usuario: nuevoUsuario });
}
export async function GET() {
  await connectDB();
  const usuarios = await Usuario.find().select('-password'); // sin password
  return NextResponse.json({ usuarios });
}
