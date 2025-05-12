'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CrearUsuario() {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    rol: 'estudiante',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const res = await fetch('/api/usuarios', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Error al crear el usuario');
      return;
    }

    setSuccess('Usuario creado exitosamente');
    setTimeout(() => {
      router.push('/admin/dashboard/usuarios');
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4 text-[#1A3B1F]">Crear nuevo usuario</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <select
          name="rol"
          value={form.rol}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="estudiante">Estudiante</option>
          <option value="docente">Docente</option>
          <option value="admin">Administrador</option>
        </select>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button className="bg-[#F59E0B] text-white px-4 py-2 rounded" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
}
