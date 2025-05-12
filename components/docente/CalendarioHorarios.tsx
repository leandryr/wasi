'use client';
import { useState } from 'react';

const dias = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'];
const horas = ['7:00', '8:00', '9:00', '10:00', '11:00'];

export default function CalendarioHorarios() {
  const [disponible, setDisponible] = useState<{ [key: string]: boolean }>({});

  const toggle = (dia: string, hora: string) => {
    const key = `${dia}-${hora}`;
    setDisponible((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="bg-[#FDF6E7] p-6 rounded shadow">
      <h2 className="text-2xl font-extrabold text-center text-[#1A3B1F] mb-6">
        BIENVENIDO A WASI TEACHER
      </h2>

      <div className="bg-[#F59E0B] text-white font-bold text-center py-2 px-4 rounded-t-lg flex justify-between items-center">
        <span className="text-lg uppercase">Selecciona tus horarios</span>
        <span className="text-sm font-normal">GTM -4</span>
      </div>

      <div className="overflow-x-auto bg-white rounded-b-lg shadow">
        <table className="w-full border-collapse text-sm text-center">
          <thead>
            <tr>
              <th className="p-2 border text-[#1A3B1F] bg-[#FDF6E7]"></th>
              {dias.map((dia) => (
                <th key={dia} className="p-2 border text-[#1A3B1F] bg-[#FDF6E7]">
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horas.map((hora) => (
              <tr key={hora}>
                <td className="p-2 border font-bold text-[#1A3B1F] bg-[#FDF6E7]">{hora}</td>
                {dias.map((dia) => {
                  const key = `${dia}-${hora}`;
                  const activo = disponible[key];
                  return (
                    <td
                      key={key}
                      className={`border p-2 cursor-pointer transition duration-200 select-none ${
                        activo ? 'bg-green-500 text-white font-bold' : 'hover:bg-green-100'
                      }`}
                      onClick={() => toggle(dia, hora)}
                    >
                      {hora}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
