'use client';
import Image from 'next/image';

export default function VideoLlamada() {
  return (
    <section className="bg-[#FDF6E7] p-6 rounded-lg shadow border border-[#F59E0B] max-w-xl">
      <h2 className="text-lg font-bold text-[#1A3B1F] mb-4 uppercase">Clase con Antonio</h2>

      <div className="flex items-center gap-4 mb-4">
        {/* Avatar del estudiante */}
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="/antonio-avatar.webp"
            alt="Estudiante Antonio"
            width={64}
            height={64}
            className="object-cover rounded-full"
          />
        </div>

        {/* Info del estudiante */}
        <div className="text-sm text-[#1A3B1F] space-y-1">
          <p><strong>Nombre:</strong> Antonio Ruiz</p>
          <p><strong>Clase:</strong> Speaking básico</p>
          <p><strong>Duración:</strong> 25 min</p>
        </div>
      </div>

      {/* Botón JOIN */}
      <div className="text-center">
        <button className="bg-[#F59E0B] text-white px-6 py-2 rounded font-bold hover:brightness-110 transition">
          JOIN CLASS
        </button>
      </div>
    </section>
  );
}
