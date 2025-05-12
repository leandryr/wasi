'use client';

import { UserCircle, MoreVertical, Calendar } from 'lucide-react';

const clases = [
  {
    titulo: 'TU SIGUIENTE CLASE 1',
    fecha: 'MARTES 7 DE ABRIL',
    hora: '8:00 PM',
    tareas: 4,
  },
  {
    titulo: 'TU SIGUIENTE CLASE 2',
    fecha: 'MARTES 7 DE ABRIL',
    hora: '8:00 PM',
    tareas: 4,
  },
];

export default function MisClases() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-extrabold text-[#1A3B1F] uppercase">Prepárate para tu siguiente lección</h2>

      {clases.map((clase, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#FDF6E7] border-2 border-[#F59E0B] rounded-lg p-4 shadow"
        >
          {/* Avatar alumno */}
          <div className="w-12 h-12 bg-[#EEE] rounded-full mr-4 flex-shrink-0" />

          {/* Info clase */}
          <div className="flex-1">
            <h3 className="text-[#1A3B1F] font-bold">{clase.titulo}</h3>
            <p className="text-sm text-gray-700">{clase.fecha}</p>
            <p className="text-sm text-gray-700">{clase.hora}</p>
            <p className="text-sm text-gray-700">Tareas: {clase.tareas}</p>
          </div>

          {/* Botón y acciones */}
          <div className="flex items-center gap-2">
            <button className="bg-[#F59E0B] text-white px-4 py-1 rounded font-bold text-sm hover:brightness-105">
              ENTRAR
            </button>
            <UserCircle className="text-[#1A3B1F]" />
            <MoreVertical className="text-[#1A3B1F]" />
          </div>
        </div>
      ))}
    </section>
  );
}
