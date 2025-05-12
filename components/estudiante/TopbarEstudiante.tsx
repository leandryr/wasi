'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function TopbarEstudiante() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <header className="bg-[#1A3B1F] text-white px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <Image src="/wasi-logo.webp" alt="Logo" width={40} height={40} />
        <span className="font-bold text-lg">WASI Student</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm">Hola, Antonio</span>
        <Image src="/antonio-avatar.webp" alt="Estudiante" width={32} height={32} className="rounded-full" />
        <button
          onClick={handleLogout}
          title="Cerrar sesión"
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm"
        >
          <LogOut size={16} /> Salir
        </button>
      </div>
    </header>
  );
}
