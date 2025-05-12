'use client';

import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';

type Usuario = {
  _id: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'docente' | 'estudiante';
};

export default function EditarUsuario() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const res = await fetch(`/api/usuarios/${id}`);
        const data = await res.json();
        setUsuario(data.usuario);
      } catch (err) {
        console.error('❌ Error cargando usuario:', err);
      }
    };

    if (id) fetchUsuario();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!usuario) return;
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!usuario) return;

    try {
      const res = await fetch(`/api/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });

      const data = await res.json();
      setMensaje(data.message || data.error);

      if (res.ok) {
        setTimeout(() => {
          router.push('/admin/dashboard/usuarios');
        }, 1000);
      }
    } catch (err) {
      setMensaje('Error al actualizar usuario');
      console.error('❌ Error al guardar cambios:', err);
    }
  };

  if (!usuario) return <p className="text-sm">Cargando...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4 text-[#1A3B1F]">Editar usuario</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          value={usuario.nombre}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={usuario.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <select
          name="rol"
          value={usuario.rol}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="estudiante">Estudiante</option>
          <option value="docente">Docente</option>
          <option value="admin">Administrador</option>
        </select>

        {mensaje && <p className="text-sm text-center text-blue-600">{mensaje}</p>}

        <button className="bg-[#1A3B1F] text-white px-4 py-2 rounded" type="submit">
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
