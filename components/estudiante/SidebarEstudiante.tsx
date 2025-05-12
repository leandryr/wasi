'use client';
import { Home, BookOpen, ClipboardList, BarChart2, User } from 'lucide-react';
import Link from 'next/link';

export default function SidebarEstudiante() {
  return (
    <aside className="w-20 lg:w-48 bg-[#1A3B1F] text-white flex flex-col justify-between py-6 px-4 shadow-lg">
      <div className="space-y-6">
        {/* Logo o ícono WASI opcional */}
        <Link href="/estudiante/dashboard" className="text-center font-bold text-lg tracking-wide block">
          WASI
        </Link>

        {/* Menú principal */}
        <nav className="space-y-4 text-sm">
          <Link href="/estudiante/dashboard" className="flex items-center gap-2 hover:text-[#F59E0B]">
            <Home size={20} /> <span className="hidden lg:inline">Inicio</span>
          </Link>
          <Link href="/estudiante/dashboard/cursos" className="flex items-center gap-2 hover:text-[#F59E0B]">
            <BookOpen size={20} /> <span className="hidden lg:inline">Cursos</span>
          </Link>
          <Link href="/estudiante/dashboard/tareas" className="flex items-center gap-2 hover:text-[#F59E0B]">
            <ClipboardList size={20} /> <span className="hidden lg:inline">Tareas</span>
          </Link>
          <Link href="/estudiante/dashboard/progreso" className="flex items-center gap-2 hover:text-[#F59E0B]">
            <BarChart2 size={20} /> <span className="hidden lg:inline">Progreso</span>
          </Link>
        </nav>
      </div>

      {/* Parte inferior: perfil o botón HOME */}
      <div className="flex items-center justify-center mt-10">
        <Link href="/estudiante/dashboard/perfil" className="hover:text-[#F59E0B]">
          <User size={24} />
        </Link>
      </div>
    </aside>
  );
}
