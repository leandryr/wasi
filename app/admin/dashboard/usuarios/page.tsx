'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await fetch('/api/usuarios');
        if (!res.ok) throw new Error('Error al obtener usuarios');
        const data = await res.json();
        setUsuarios(data.usuarios);
      } catch (err) {
        console.error('❌ Error al cargar usuarios:', err);
      }
    };
    fetchUsuarios();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1A3B1F]">Usuarios registrados</h1>
        <Link
          href="/admin/dashboard/usuarios/nuevo"
          className="bg-[#F59E0B] text-white px-4 py-2 rounded"
        >
          Crear nuevo
        </Link>
      </div>

      <table className="w-full bg-white rounded shadow text-sm">
        <thead>
          <tr className="bg-[#FDF6E7] text-left text-[#1A3B1F]">
            <th className="p-2">Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u: any) => (
            <tr key={u._id} className="border-t">
              <td className="p-2">{u.nombre}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>
              <td>
                <Link
                  href={`/admin/dashboard/usuarios/${u._id}`}
                  className="text-blue-600 underline"
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
