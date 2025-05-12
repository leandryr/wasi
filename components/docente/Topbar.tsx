'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Bell, Wallet2, MessageCircle, UserCircle, LogOut } from 'lucide-react';

export default function Topbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <header className="bg-[#1A3B1F] text-white px-4 py-3 rounded-md shadow flex items-center justify-between">
      {/* Logo WASI */}
      <div className="flex items-center gap-3">
        <Image
          src="/wasi-logo.svg"
          alt="Wasi logo"
          width={120}
          height={100}
        />
      </div>

      {/* Botones de navegación */}
      <div className="flex gap-4 items-center">
        <button className="bg-[#EFE9D8] text-[#1A3B1F] px-4 py-1 rounded-full font-semibold text-sm relative">
          Novedades
          <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>
        <button className="bg-[#EFE9D8] text-[#1A3B1F] px-4 py-1 rounded-full font-semibold text-sm flex items-center gap-1">
          0 $ <Wallet2 size={16} />
        </button>
        <button className="bg-[#EFE9D8] text-[#1A3B1F] px-4 py-1 rounded-full font-semibold text-sm flex items-center gap-1">
          Chats <MessageCircle size={16} />
        </button>
        <UserCircle size={32} className="text-[#FDBF2D]" />

        {/* Botón Cerrar sesión */}
        <button
          onClick={handleLogout}
          title="Cerrar sesión"
          className="ml-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm"
        >
          <LogOut size={16} /> Salir
        </button>
      </div>
    </header>
  );
}
