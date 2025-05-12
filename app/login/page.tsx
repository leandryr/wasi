'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log('Respuesta del login:', data);

      if (!res.ok || !data.rol) {
        setError(data.error || 'Error al iniciar sesión');
        return;
      }

      // Redirección por rol (el token ya está en la cookie)
      if (data.rol === 'admin') {
        window.location.href = '/admin/dashboard';
      } else if (data.rol === 'docente') {
        window.location.href = '/docente/dashboard';
      } else {
        window.location.href = '/estudiante/dashboard';
      }
    } catch (err) {
      console.error('Error al conectarse con el servidor:', err);
      setError('No se pudo conectar al servidor.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F1E5]">
      <form
        onSubmit={handleLogin}
        className="bg-[#EFE9D8] p-8 w-[340px] rounded-md shadow-md space-y-6"
      >
        <h1 className="text-2xl font-extrabold text-[#1A3B1F] text-center">LOGIN</h1>

        <div>
          <label className="block text-sm font-bold text-[#1A3B1F] uppercase mb-1">
            Usuario / E-mail
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-white rounded-md outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#1A3B1F] uppercase mb-1">
            Contraseña
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-white rounded-md outline-none"
          />
        </div>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#1A3B1F] text-white py-2 rounded-md font-semibold"
        >
          Entrar
        </button>

        <hr className="border-t mt-6" />

        <p className="text-center text-[#1A3B1F] text-sm font-light uppercase">
          Crea una cuenta
        </p>
      </form>
    </div>
  );
}
