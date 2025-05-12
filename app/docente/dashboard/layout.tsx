import SidebarDocente from '@/components/docente/SidebarDocente';
import Topbar from '@/components/docente/Topbar';

export default function DocenteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#F5F5F0] min-h-screen">
      <SidebarDocente />
      <div className="flex-1 flex flex-col space-y-6 p-6">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
