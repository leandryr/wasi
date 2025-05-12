import TopbarAdmin from '@/components/admin/TopbarAdmin';
import SidebarAdmin from '@/components/admin/SidebarAdmin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FDF6E7]">
      {/* Sidebar fijo */}
      <SidebarAdmin />

      {/* Área principal */}
      <div className="flex-1 flex flex-col">
        <TopbarAdmin />
        <main className="p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
