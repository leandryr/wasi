'use client';
import { CalendarDays, UserCircle } from 'lucide-react';

const clases = [
  'JUEVES 19:00',
  'MARTES 18:30',
  'SÁBADO 13:00',
  'CLASES INDIVIDUALES',
  'DOMINGO 13 DE MARZO 07:00',
];

export default function CalendarioCompacto() {
  return (
    <aside className="bg-[#1A3B1F] text-white p-4 rounded-lg w-full max-w-xs shadow space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Calendario</h3>
        <div className="flex gap-2">
          <UserCircle size={20} />
          <CalendarDays size={20} />
        </div>
      </div>

      <ul className="space-y-2 text-sm">
        {clases.map((texto, i) => (
          <li key={i} className="bg-white text-[#1A3B1F] rounded px-3 py-2 font-semibold">
            {texto}
          </li>
        ))}
      </ul>
    </aside>
  );
}
