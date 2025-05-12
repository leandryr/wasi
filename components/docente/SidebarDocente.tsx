'use client';
import { BookOpen, Users, ClipboardList, LayoutDashboard, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/docente/dashboard', icon: LayoutDashboard, label: 'Inicio' },
  { href: '/docente/cursos', icon: BookOpen, label: 'Mis Cursos' },
  { href: '/docente/estudiantes', icon: Users, label: 'Estudiantes' },
  { href: '/docente/evaluaciones', icon: ClipboardList, label: 'Evaluaciones' },
];

export default function SidebarDocente() {
  const pathname = usePathname();

  return (
    <aside className="w-20 lg:w-52 bg-[#1A3B1F] text-white flex flex-col justify-between py-6 px-4 shadow-lg">
      <div className="space-y-6">
        {/* Logo o título */}
        <Link href="/docente/dashboard" className="text-center font-bold text-lg block">
          WASI
        </Link>

        {/* Navegación */}
        <nav className="space-y-4 text-sm">
          {menuItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 hover:text-[#F59E0B] ${
                pathname === href ? 'text-[#F59E0B] font-bold' : ''
              }`}
            >
              <Icon size={20} />
              <span className="hidden lg:inline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Perfil o icono final */}
      <Link href="/docente/perfil" className="flex items-center justify-center hover:text-[#F59E0B]">
        <UserCircle size={24} />
      </Link>
    </aside>
  );
}
