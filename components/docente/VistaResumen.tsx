'use client';
import { useState } from 'react';

const datos = [
  {
    label: 'Ingresos',
    valor: '$971',
    variacion: '+87%',
  },
  {
    label: 'Clases',
    valor: '301',
    variacion: '+760%',
  },
  {
    label: 'Estudiantes activos',
    valor: '25',
    variacion: '+177%',
  },
  {
    label: 'Nuevo estudiante',
    valor: '16',
    variacion: '+220%',
  },
];

export default function VistaResumen() {
  const [rango, setRango] = useState('Últimos 90 días');

  return (
    <section className="bg-white p-6 rounded shadow border border-[#F3F4F6] max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#1A3B1F]">$ {datos[0].valor}</h2>
        <select
          value={rango}
          onChange={(e) => setRango(e.target.value)}
          className="border border-gray-300 text-sm p-1 rounded"
        >
          <option>Últimos 30 días</option>
          <option>Últimos 90 días</option>
          <option>Este año</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {datos.map((item, i) => (
          <div
            key={i}
            className="bg-[#FDF6E7] p-4 rounded border shadow text-[#1A3B1F]"
          >
            <h3 className="text-lg font-semibold">{item.label}</h3>
            <p className="text-xl font-bold">{item.valor}</p>
            <span className="text-sm text-green-600">{item.variacion}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
