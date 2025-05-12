import SidebarEstudiante from '@/components/estudiante/SidebarEstudiante';
import TopbarEstudiante from '@/components/estudiante/TopbarEstudiante';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FDF6E7]">
      {/* Sidebar a la izquierda */}
      <SidebarEstudiante />

      {/* Área principal con topbar y contenido */}
      <div className="flex-1 flex flex-col">
        <TopbarEstudiante />
        <main className="p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
