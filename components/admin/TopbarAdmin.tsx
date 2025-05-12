'use client';
import Image from 'next/image';
import BotonLogout from '@/components/shared/BotonLogout';

export default function TopbarAdmin() {
  return (
    <header className="bg-[#1A3B1F] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h2 className="font-semibold text-lg">Panel de administración</h2>
      
      <div className="flex items-center gap-4">
        <BotonLogout />
        <Image src="/admin-avatar.webp" alt="Admin" width={32} height={32} className="rounded-full" />
      </div>
    </header>
  );
}
