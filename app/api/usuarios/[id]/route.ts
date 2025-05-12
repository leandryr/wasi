import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Usuario from '@/models/Usuario';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const usuario = await Usuario.findById(params.id).select('-password');
  if (!usuario) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }
  return NextResponse.json({ usuario });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();

  const actualizado = await Usuario.findByIdAndUpdate(
    params.id,
    { nombre: body.nombre, email: body.email, rol: body.rol },
    { new: true }
  );

  if (!actualizado) {
    return NextResponse.json({ error: 'No se pudo actualizar' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Usuario actualizado exitosamente', usuario: actualizado });
}
