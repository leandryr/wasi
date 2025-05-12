'use client';
import { Users, Settings, LayoutDashboard, Book } from 'lucide-react';
import Link from 'next/link';

export default function SidebarAdmin() {
  return (
    <aside className="w-20 lg:w-52 bg-[#1A3B1F] text-white flex flex-col justify-between py-6 px-4 shadow-lg">
      <div className="space-y-6">
        <Link href="/admin/dashboard" className="text-center font-bold text-lg block">
          WASI
        </Link>
        <nav className="space-y-4 text-sm">
          <Link href="/admin/dashboard" className="flex items-center gap-2 hover:text-[#F59E0B]">
            <LayoutDashboard size={20} />
            <span className="hidden lg:inline">Panel</span>
          </Link>
          <Link href="/admin/dashboard/usuarios" className="flex items-center gap-2 hover:text-[#F59E0B]">
            <Users size={20} />
            <span className="hidden lg:inline">Usuarios</span>
          </Link>
          <Link href="/admin/dashboard/cursos" className="flex items-center gap-2 hover:text-[#F59E0B]">
            <Book size={20} />
            <span className="hidden lg:inline">Cursos</span>
          </Link>
        </nav>
      </div>
      <Link href="/admin/dashboard/configuracion" className="flex items-center justify-center hover:text-[#F59E0B]">
        <Settings size={24} />
      </Link>
    </aside>
  );
}
