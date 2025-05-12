'use client';
import { CalendarDays } from 'lucide-react';

export default function EventosDocente() {
  return (
    <section className="bg-[#FDF6E7] p-6 rounded-lg shadow border border-[#F59E0B] max-w-3xl">
      <h2 className="text-xl font-extrabold text-[#1A3B1F] mb-4 uppercase">
        Nuevos eventos para teachers
      </h2>

      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>

      <div className="flex items-center justify-between mt-4">
        <div className="text-[#1A3B1F] font-bold text-md">
          JUEVES 3 MARZO, 2025
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays className="text-[#1A3B1F]" size={20} />
          <button className="bg-[#F59E0B] text-white px-4 py-2 rounded-md font-semibold text-sm hover:brightness-110">
            AÑADIR
          </button>
        </div>
      </div>
    </section>
  );
}
