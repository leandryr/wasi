'use client';
import { LogOut } from 'lucide-react';

export default function BotonLogout() {
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login';
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1 text-sm text-white hover:text-[#F59E0B]"
      title="Cerrar sesión"
    >
      <LogOut size={18} />
      <span className="hidden md:inline">Salir</span>
    </button>
  );
}
